// src/theme/SearchBar.js

import React from "react";
import EnhancedSearch from "enhancedocs-search";

import "enhancedocs-search/dist/style.css";

export default function SearchBarWrapper(props) {
  return (
    <>
      <EnhancedSearch
        config={{
          enhancedSearch: {
            projectId: "64abdae3f695bfc185b9335e"
          },
        }}
        {...props}
      />
      <EnhancedChat
        config={{
            projectId: "64abdae3f695bfc185b9335e"
        }}
        {...props}
      />
    </>
  );
}
