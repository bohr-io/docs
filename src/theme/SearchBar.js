import React from 'react';
import EnhancedSearch from 'enhancedocs-search';

import 'enhancedocs-search/dist/style.css';

export default function SearchBarWrapper(props) {
    return (
        <EnhancedSearch
            config={{
                projectId: '64abdae3f695bfc185b9335e',
                accessToken: 'pk_6f7c19ffe3058593c68e9cc07bc24c2771bcf8f8e7123c87'
            }}
            {...props}
        />
    );
}
