import { Plus } from 'phosphor-react';

import logoImage from '../assets/logo.svg';

export function Header() {
  return (
    <div className="w-full max-w-3xl mx-auto flex justify-between items-center">
      <img src={logoImage} alt="Habits logo" />
      <button
        type="button"
        className="py-4 px-6 border-2 border-violet-500 rounded-lg font-semibold flex items-center gap-3 hover:border-violet-300"
      >
        <Plus size={20} className="text-violet-500" />
        Novo hábito
      </button>
    </div>
  );
}
