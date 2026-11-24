import { useState } from 'react';
import { Check, Copy } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const KEYWORDS = new Set([
  'def', 'return', 'import', 'from', 'if', 'else', 'elif', 'for', 'in', 'while', 'print',
  'const', 'let', 'var', 'function', 'return', 'true', 'false', 'null', 'undefined',
  'include', 'bool', 'int', 'void', 'public', 'class', 'static', 'new', 'declare', 'echo',
  'SELECT', 'FROM', 'WHERE', 'ORDER', 'BY', 'DESC', 'ASC', 'LIMIT', 'AND', 'OR', 'AS',
]);

const BUILTINS = new Set([
  'sum', 'len', 'max', 'min', 'round', 'filter', 'map', 'join', 'console', 'log',
  'std', 'cout', 'printf', 'header', 'json_encode', 'strict_types', 'JSON_UNESCAPED_UNICODE',
  'String', 'System', 'out',
]);

function highlightLine(line, lang) {
  const tokenRegex =
    /(#.*$|\/\/.*$|--.*$|"(?:\\.|[^"\\])*"|'(?:\\.|[^'\\])*'|\b\d+(?:\.\d+)?\b|\b[A-Za-z_][A-Za-z0-9_]*\b|\$[A-Za-z_][A-Za-z0-9_]*)/g;
  const parts = [];
  let lastIndex = 0;
  let match;

  while ((match = tokenRegex.exec(line)) !== null) {
    if (match.index > lastIndex) {
      parts.push({ type: 'plain', text: line.slice(lastIndex, match.index) });
    }
    const token = match[0];
    let type = 'plain';
    if (
      (token.startsWith('#') && lang !== 'cpp') ||
      token.startsWith('//') ||
      token.startsWith('--')
    ) {
      type = 'comment';
    } else if (token.startsWith('#include')) {
      type = 'keyword';
    } else if (token.startsWith('"') || token.startsWith("'")) {
      type = 'string';
    } else if (token.startsWith('$')) {
      type = 'variable';
    } else if (/^\d/.test(token)) {
      type = 'number';
    } else if (KEYWORDS.has(token)) {
      type = 'keyword';
    } else if (BUILTINS.has(token)) {
      type = 'builtin';
    }
    parts.push({ type, text: token });
    lastIndex = tokenRegex.lastIndex;
  }

  if (lastIndex < line.length) {
    parts.push({ type: 'plain', text: line.slice(lastIndex) });
  }

  return parts.map((part, idx) => {
    const colorClass =
      part.type === 'comment'
        ? 'text-slate-500 italic'
        : part.type === 'string'
        ? 'text-emerald-300'
        : part.type === 'keyword'
        ? 'text-fuchsia-400 font-semibold'
        : part.type === 'builtin'
        ? 'text-sky-300'
        : part.type === 'variable'
        ? 'text-cyan-300'
        : part.type === 'number'
        ? 'text-amber-300'
        : 'text-slate-100';
    return (
      <span key={idx} className={colorClass}>
        {part.text}
      </span>
    );
  });
}

export function CodeBlock({ code, fileName, syntaxLang }) {
  const { t } = useLanguage();
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(code);
    } catch {
      const textarea = document.createElement('textarea');
      textarea.value = code;
      textarea.style.position = 'fixed';
      textarea.style.opacity = '0';
      document.body.appendChild(textarea);
      textarea.select();
      document.execCommand('copy');
      textarea.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="code-surface overflow-hidden rounded-2xl">
      <div className="flex items-center justify-between gap-3 border-b border-white/10 bg-white/[0.03] px-4 py-2.5">
        <div className="flex items-center gap-2">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="h-2.5 w-2.5 rounded-full bg-rose-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-amber-400/80" />
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/80" />
          </span>
          <span className="ml-2 font-mono text-xs text-slate-400">{fileName}</span>
        </div>

        <button
          type="button"
          onClick={handleCopy}
          className={`inline-flex items-center gap-1.5 rounded-lg border px-2.5 py-1 text-xs font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sky-400 ${
            copied
              ? 'border-emerald-400/50 bg-emerald-500/20 text-emerald-300'
              : 'border-white/15 bg-white/5 text-slate-300 hover:bg-white/10 hover:text-white'
          }`}
        >
          {copied ? <Check className="h-3.5 w-3.5" /> : <Copy className="h-3.5 w-3.5" />}
          <span>{copied ? t.languages.copiedBtn : t.languages.copyBtn}</span>
        </button>
      </div>

      <pre className="overflow-x-auto p-4 font-mono text-xs leading-relaxed sm:text-[13px]">
        <code>
          {lines.map((line, idx) => (
            <div key={idx} className="table-row">
              <span className="table-cell select-none pr-4 text-right text-slate-600">
                {idx + 1}
              </span>
              <span className="table-cell whitespace-pre">
                {line.length > 0 ? highlightLine(line, syntaxLang) : ' '}
              </span>
            </div>
          ))}
        </code>
      </pre>
    </div>
  );
}
