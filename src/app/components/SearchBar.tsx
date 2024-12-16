"use client";
import { Search } from "lucide-react";
import React from "react";
import { handleSearchFormServerAction } from "../actions/SearchFormServerAction";
import { useFormState } from 'react-dom'

const initialState = {
  searchQuery: "",
};

export default function SearchBar() {
  const [state, formAction] = useFormState(
    handleSearchFormServerAction,
    initialState
  );

  return (
      <form className="flex-1 max-w-md mx-8" action={formAction}>
        <div className="relative">
          <input
            type="text"
            placeholder="Search products..."
            name="searchQuery"
            className="w-full pl-10 pr-4 py-2 rounded-lg border text-black border-gray-200 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 focus:outline-none"
          />
          <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-600" />
        </div>
      </form>
  );
}
