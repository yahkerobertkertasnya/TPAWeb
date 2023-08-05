import Loading from "../../components/Loading.tsx";
import styles from "../assets/styles/user/user.module.scss";
import Navbar from "../../components/navbar/Navbar.tsx";
import {ChangeEvent, useState} from "react";
import {LiaBirthdayCakeSolid, LiaUserFriendsSolid} from "react-icons/lia";
import {BsGenderAmbiguous} from "react-icons/bs";
import {MdOutlineMarkEmailRead} from "react-icons/md";
import {Maybe, Post} from "../../gql/graphql.ts";
import {User} from "../../gql/graphql";
import PostBox from "../../components/post/PostBox.tsx";
import {useParams} from "react-router-dom";
import {useMutation, useQuery} from "@apollo/client";
import {GET_USER} from "../../lib/query/user/getUser.graphql.ts";
import {BiSolidPencil} from "react-icons/bi";
import {IoMdReverseCamera} from "react-icons/io";
import uploadStorage from "../../controller/firebase/storage.ts";
import {UPDATE_USER_PROFILE} from "../../lib/query/user/updateUserProfile.graphql.ts";
import {UPDATE_USER_BACKGROUND} from "../../lib/query/user/updateUserBackground.graphql.ts";
import errorHandler from "../../controller/errorHandler.ts";
import EditUserModal from "../../components/user/EditUserModal.tsx";


export default function User(){
    const { username } = useParams();
    const [user, setUser] = useState<User | null>(null);
    const [isPost, setIsPost] = useState(true);
    const [modalState, setModalState] = useState(false);
    const { loading } = useQuery(GET_USER, {
       variables: {
           username: username
       },
        onCompleted: (dat) => {
           console.log(dat.getUser)
            setUser(dat.getUser);
        },
        onError: errorHandler
    });
    // const auth = useContext(AuthContext);
    const [updateProfile] = useMutation(UPDATE_USER_PROFILE);
    const [updateBackground] = useMutation(UPDATE_USER_BACKGROUND);


    const handleProfileInput = () => {
        const fileInput = document.getElementById("profileInput") as HTMLInputElement;
        fileInput.click();
    }

    const handleBackgroundInput = () => {
        const fileInput = document.getElementById("backgroundInput") as HTMLInputElement;
        fileInput.click();
    }

    const handleProfileFile = async (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const file = e.target.files[0] as File;

            const url = await uploadStorage("profile", file);

            if(user)
                setUser({
                ...user,
                profile: url
            })

            updateProfile({
                variables: {
                    profile: url
                }
            });
        }
    }

    const handleBackgroundFile = async (e: ChangeEvent<HTMLInputElement>) => {
        if(e.target.files) {
            const file = e.target.files[0] as File;

            const url = await uploadStorage("background", file);

            if(user)
                setUser({
                    ...user,
                    background: url
                })

            updateBackground({
                variables: {
                    background: url
                }
            });
        }
    }

    if(loading) return <></>
    return (
        <>
            {
                modalState && <EditUserModal userDat={user!}  setUserDat={setUser} setModalState={setModalState} />
            }
            {
                loading && <Loading />
            }
            <div id={"page"} className={styles.page}>
                <Navbar />
                <header className={styles.header}>
                    <div className={styles.headerContent}>
                        <IoMdReverseCamera
                            onClick={() => handleBackgroundInput()}
                            color={"black"}
                            size={"1.5rem"}
                        />
                        <input
                            id={"backgroundInput"}
                            className={"fileInput"}
                            type={"file"}
                            multiple={false}
                            hidden={true}
                            onChange={handleBackgroundFile}
                            accept={"image/*, video/*"}
                        />
                        <img src={user?.background ? user?.background : "https://picsum.photos/200/300"} alt={"profile picture"} />
                        <img src={user?.profile ? user?.profile : ""} alt={""}/>
                        <div className={styles.circular}>
                            <IoMdReverseCamera
                                onClick={() => handleProfileInput()}
                                color={"black"}
                                size={"1.5rem"}
                            />
                            <input
                                id={"profileInput"}
                                className={"fileInput"}
                                type={"file"}
                                multiple={false}
                                hidden={true}
                                onChange={handleProfileFile}
                                accept={"image/*, video/*"}
                            />
                        </div>
                    </div>
                    <div className={styles.profile}>
                        <div className={styles.text}>
                            <h1>{user?.username}</h1>
                            <p>{ user?.firstName } { user?.lastName }</p>
                        </div>
                        <button
                            onClick={() => setModalState(true)}
                        >
                            <BiSolidPencil />
                            Edit Profile
                        </button>
                    </div>
                    <div className={styles.info}>
                        <p>
                            <BsGenderAmbiguous
                                color={"black"}
                                size={"1.3rem"}
                            />
                            { user?.gender }
                        </p>
                        <p>
                            <MdOutlineMarkEmailRead
                                color={"black"}
                                size={"1.3rem"}
                            />
                            { user?.email }
                        </p>
                        <p>
                            <LiaBirthdayCakeSolid
                                color={"black"}
                                size={"1.3rem"}
                            />
                            { (new Date(user?.dob)).toLocaleDateString('en-us', { day: '2-digit', month: 'long', year: 'numeric' }) }
                        </p>
                        <p>
                            <LiaUserFriendsSolid
                                color={"black"}
                                size={"1.3rem"}
                            />
                            2
                        </p>
                    </div>
                    <div className={styles.buttons}>
                        <button
                            className={isPost ? styles.active : ""}
                            onClick={() => setIsPost(true)}
                        >
                            Posts
                        </button>
                        <button
                            className={!isPost ? styles.active : ""}
                            onClick={() => setIsPost(false)}
                        >
                            Friends
                        </button>
                    </div>
                </header>
                <div className={styles.content}>
                    {
                        isPost ?
                            <>
                                <div>
                                    {
                                        user && user.posts?.map((post: Maybe<Post>) => {
                                            if(post)
                                                return <PostBox key={post.id} post={post} />
                                        })
                                    }
                                </div>
                            </> :
                        <></>
                    }
                </div>
            </div>
        </>
    );
}
