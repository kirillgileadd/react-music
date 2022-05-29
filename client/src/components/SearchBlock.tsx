import React, {FC} from 'react';
import Box from "@mui/material/Box";

interface SearchBlockProps {
    search: string
}

const SearchBlock:FC<SearchBlockProps> = ({search}) => {
    return (
        <Box sx={{minHeight: "calc(100vh - 200px)", backgroundColor: ''}}>
            {search}
        </Box>
    );
};

export default SearchBlock;