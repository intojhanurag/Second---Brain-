import { useState } from "react";
import { Button } from "./Button";

interface ShareModalProps {
  open: boolean;
  onClose: () => void;
  url: string;
}

export function ShareModal({ open, onClose, url }: ShareModalProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // Reset copied state after 2 seconds
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="relative bg-slate-900 p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-xl text-white font-semibold mb-4">Share Link</h2>
        <div className="mb-4">
          <input
            type="text"
            value={url}
            readOnly
            className="w-full p-2 border border-gray-300 rounded"
          />
        </div>
        <div className="flex justify-between">
          <Button onClick={copyToClipboard} variant="primary" text={copied ? "Copied!" : "Copy"} />
          <Button onClick={onClose} variant="secondary" text="Close" />
        </div>
      </div>
    </div>
  );
}