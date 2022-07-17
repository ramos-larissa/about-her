import styles from "../../styles/components/MenuBottom.module.css";
import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import List from "@mui/material/List";
import ListIcon from "@mui/icons-material/List";
import HomeIcon from '@mui/icons-material/Home';
import MarkAsUnreadIcon from '@mui/icons-material/MarkAsUnread';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import QuizIcon from '@mui/icons-material/Quiz';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PublicIcon from '@mui/icons-material/Public';

export default function MenuBottom() {
    const [state, setState] = React.useState(false);

    const toggleDrawer = (open) => (event) => {
        if (
            event.type === "keydown" &&
            (event.key === "Tab" || event.key === "Shift")
        ) {
            return;
        }

        setState({ ...state, open });
    };

    const list = () => (
        <Box
            sx={{
                width: "auto",
            }}
            role="presentation"
            onClick={toggleDrawer(false)}
            onKeyDown={toggleDrawer(false)}
        >
            <List className={styles.menuListBottom}>
                <Button href="/"><HomeIcon className={styles.iconMenuBottom} fontSize="large"/>Home</Button>
                <br />
                <Button href="letters"><MarkAsUnreadIcon className={styles.iconMenuBottom} fontSize="large"/>Letters</Button>
                <br />
                <Button href="songs"><LibraryMusicIcon className={styles.iconMenuBottom} fontSize="large"/>Songs</Button>
                <br />
                <Button href="curiosities"><QuizIcon className={styles.iconMenuBottom}  fontSize="large"/>Curiosities</Button>
                <br />
                <Button href="goals"><ListAltIcon className={styles.iconMenuBottom} fontSize="large"/>Goals</Button>
                <br />
                <Button href="timezone"><PublicIcon className={styles.iconMenuBottom} fontSize="large"/>Timezone</Button>
            </List>
        </Box>
    );

    return (
        <>
            <div className={styles.menuMobile}>
                <Button onClick={toggleDrawer(true)}>
                    <ListIcon className={styles.menuIcon}/>
                </Button>
                <Drawer
                    anchor={"bottom"}
                    open={state.open}
                    onClose={toggleDrawer(false)}
                >
                    {list()}
                </Drawer>
            </div>
        </>
    );
}
