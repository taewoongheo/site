interface TerminalProps {
  code: string;
  variant?: "error" | "command";
}

const Terminal = ({ code, variant = "command" }: TerminalProps) => {
  const isError = variant === "error";

  return (
    <div className="my-6 overflow-hidden rounded-lg border border-zinc-700 bg-[#1a1a1a] not-prose font-mono text-sm shadow-xl">
      {/* Title bar */}
      <div className="flex items-center gap-2 border-b border-zinc-700 bg-[#2d2d2d] px-4 py-2.5">
        <span className="text-xs text-zinc-500">Terminal</span>
      </div>

      {/* Terminal content */}
      <div className="p-4">
        <pre
          className={`whitespace-pre-wrap leading-relaxed ${
            isError ? "text-[#ff6b6b]" : "text-[#c8c8c8]"
          }`}
        >
          {isError ? (
            code
          ) : (
            <>
              <span className="text-[#6bff6b] select-none">$ </span>
              {code}
            </>
          )}
        </pre>
      </div>
    </div>
  );
};

export default Terminal;
