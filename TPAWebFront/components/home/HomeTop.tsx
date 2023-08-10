import {FaBookOpen} from "react-icons/fa";
import {MdOutlineAdd, MdOutlineVideoLibrary} from "react-icons/md";
import styles from "../../src/assets/styles/home/homeTop.module.scss"
import {useContext, useState} from "react";
import {AuthContext} from "../context/AuthContextProvider.tsx";
import {AiOutlineShareAlt} from "react-icons/ai";
import {BsClockHistory} from "react-icons/bs";
import {BiSolidMessageRoundedDetail} from "react-icons/bi";
import {Link} from "react-router-dom";

export default function HomeTop(){
    const [tab, setTab] = useState("stories")
    const { auth } = useContext(AuthContext);

    console.log(auth)
    return (
        <div className={styles.myBox}>
            <header>
                <h4
                    onClick={() => setTab("stories")}
                    className={tab == "stories" ? styles.h4Active : ""}
                >
                    <FaBookOpen
                        size={"1.5rem"}
                    />
                    Stories
                </h4>
                <h4
                    onClick={() => setTab("reels")}
                    className={tab == "reels" ? styles.h4Active : ""}
                >
                    <MdOutlineVideoLibrary
                        size={"1.5rem"}
                    />
                    Reels
                </h4>
            </header>
            <hr />
            <div className={styles.content}>
                <div className={styles.left}>
                    <div className={styles.story}>
                        <img
                            src={auth?.profile ? auth.profile : "../src/assets/default-profile.jpg"}
                            alt={""}
                        />
                        <div className={styles.create}>
                            <h4>
                                Create Story
                            </h4>
                            <Link to={"/stories/create"} >
                                <MdOutlineAdd
                                    size={"1.2rem"}
                                    color={"white"}
                                />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className={styles.right}>
                    <p>
                        <AiOutlineShareAlt
                            size={"1.5rem"}
                        />
                        Share a photo or write something
                    </p>
                    <p>
                        <BsClockHistory
                            size={"1.5rem"}
                        />
                        Stories disappears after 24 hours
                    </p>
                    <p>
                        <BiSolidMessageRoundedDetail
                            size={"1.5rem"}
                        />
                        Your stories are private
                    </p>
                </div>
            </div>
        </div>
    );
}
