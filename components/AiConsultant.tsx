import React, { useState } from 'react';
import { generateAppProposal } from '../services/geminiService';
import { LoadingState } from '../types';
import { Sparkles, Send, Bot, Loader2 } from 'lucide-react';
import ReactMarkdown from 'react-markdown';

export const AiConsultant: React.FC = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState<string | null>(null);
  const [status, setStatus] = useState<LoadingState>(LoadingState.IDLE);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setStatus(LoadingState.LOADING);
    setResponse(null);

    const result = await generateAppProposal(input);
    setResponse(result);
    setStatus(LoadingState.SUCCESS);
  };

  return (
    <div className="w-full max-w-4xl mx-auto bg-slate-800/50 border border-slate-700 rounded-2xl p-6 md:p-8 backdrop-blur-sm shadow-xl">
      <div className="flex items-center gap-3 mb-6">
        <div className="p-3 bg-blue-600/20 rounded-full">
          <Sparkles className="w-6 h-6 text-blue-400" />
        </div>
        <div>
          <h3 className="text-xl font-bold text-white">AI Konzultant</h3>
          <p className="text-slate-400 text-sm">
            Popište svůj problém (např. "Mám chaos ve skladu") a já navrhnu řešení.
          </p>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="relative">
        <div className="relative flex items-center">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Popište, co potřebujete vyřešit..."
            className="w-full bg-slate-900 border border-slate-700 text-white rounded-xl py-4 pl-4 pr-14 focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all placeholder:text-slate-500"
            disabled={status === LoadingState.LOADING}
          />
          <button
            type="submit"
            disabled={status === LoadingState.LOADING || !input.trim()}
            className="absolute right-2 p-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {status === LoadingState.LOADING ? (
              <Loader2 className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
          </button>
        </div>
      </form>

      {response && (
        <div className="mt-6 p-6 bg-slate-900/80 rounded-xl border border-slate-700/50 animate-in fade-in slide-in-from-bottom-4 duration-500">
          <div className="flex items-start gap-3">
            <Bot className="w-6 h-6 text-emerald-400 mt-1 flex-shrink-0" />
            <div className="prose prose-invert prose-sm max-w-none text-slate-300">
              <ReactMarkdown>{response}</ReactMarkdown>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};