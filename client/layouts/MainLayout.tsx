import NavBar from "../components/NavBar";
import React, {FC} from "react";
import {Container} from "@mui/material";

export interface LayoutProps  {
    children: React.ReactNode
}

const MainLayout = ({children}: LayoutProps) => {
    return (
        <div>
            <NavBar/>
            {/*<Container>*/}
                {children}
            {/*</Container>*/}
        </div>
    );
};

export default MainLayout;