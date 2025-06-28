import React from "react";

export default function FormInput({ label, value, onChange, name }) {
  return (
    <div className="mb-4">
      <label className="block mb-1 font-medium text-gray-600 text-sm">
        {label}
      </label>
      <input
        type="number"
        name={name}
        value={value}
        onChange={onChange}
        className="shadow-sm px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        placeholder={`Masukkan ${label.toLowerCase()}`}
      />
    </div>
  );
}
