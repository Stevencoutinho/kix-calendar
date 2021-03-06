/* import */
import React from "react";

const useLocalStrage = (key: string) => {
  if (!localStorage.getItem(key)) localStorage.setItem(key, "[]");
};

export default useLocalStrage;