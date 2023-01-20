import { Check } from 'phosphor-react';

export function NewHabitForm() {
  return (
    <div>
      <form className="w-full flex flex-col mt-6">
        <label htmlFor="title" className="font-semibold leading-tight">
          Qual seu comprometimento?
        </label>

        <input
          type="text"
          id="title"
          placeholder="Exercícios, dormir bem, etc... "
          className="p-4 rounded-lg mt-3 bg-zinc-800 text-white placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-violet-500"
          autoFocus
        />

        <label htmlFor="" className="font-semibold leading-tight mt-4">
          Qual a recorrência?
        </label>

        <button
          type="submit"
          className="mt-6 rounded-lg p-4 flex items-center justify-center gap-3 font-semibold bg-green-600 hover:bg-green-500 focus:outline-none focus:ring-2 focus:ring-green-400 focus:rounded"
        >
          <Check size={24} weight="bold" />
          Confirmar
        </button>
      </form>
    </div>
  );
}
