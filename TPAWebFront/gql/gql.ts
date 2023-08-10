/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "    \n    mutation acceptFriend($friend: ID!) {\n      acceptFriend(friend: $friend) {\n        accepted\n      }\n    }\n": types.AcceptFriendDocument,
    "\n    mutation addFriend($friendInput: FriendInput!){\n      addFriend(friendInput: $friendInput){\n        sender {\n          username\n        }\n        receiver {\n          username\n        }\n        accepted\n      }\n    }    \n": types.AddFriendDocument,
    "    \n    query getFriends{\n      getFriends{\n        sender {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        receiver {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        accepted\n      }\n}\n": types.GetFriendsDocument,
    "    \n    mutation rejectFriend($friend: ID!){\n      rejectFriend(friend: $friend){\n        accepted\n      }\n    }\n": types.RejectFriendDocument,
    "\n    mutation createPost($post: NewPost!){\n       createPost(newPost: $post){\n        id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n": types.CreatePostDocument,
    "\n    query getCommentPost($postId: ID!) {\n      getCommentPost(postID: $postId){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        liked\n        likeCount\n        comments {\n            id\n            content\n            liked\n            likeCount\n            user {\n              firstName\n              lastName\n              username\n              profile\n              email\n              gender\n              dob\n            }\n        }\n      }\n    }\n": types.GetCommentPostDocument,
    "\n    query getPosts($pagination: Pagination!) {\n      getPosts(pagination: $pagination){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n": types.GetPostsDocument,
    "\n    mutation likePost($id: ID!){\n      likePost(postID: $id){\n        postId\n      }\n    }    \n": types.LikePostDocument,
    "\n    mutation createImageStory($story: NewImageStory!){\n      createImageStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n": types.CreateImageStoryDocument,
    "\n    mutation createTextStory($story: NewTextStory!){\n      createTextStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n": types.CreateTextStoryDocument,
    "\n    mutation activateUser($id: String!){\n      activateUser(id: $id){\n        id\n      }\n    }\n": types.ActivateUserDocument,
    "\n    mutation authenticateUser($email: String!, $password: String!){\n      authenticateUser(email: $email, password: $password)\n    }\n": types.AuthenticateUserDocument,
    "\n    query checkActivateLink($id: String!){\n      checkActivateLink(id: $id)\n    }    \n": types.CheckActivateLinkDocument,
    "\n    query checkResetLink($id: String!){\n      checkResetLink(id: $id)\n    }    \n": types.CheckResetLinkDocument,
    "\n    mutation createUser($user: NewUser!){\n      createUser(input: $user){\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n      }\n    }\n\n": types.CreateUserDocument,
    "\n    mutation forgotPassword($email: String!){\n      forgotPassword(email: $email)\n    }    \n": types.ForgotPasswordDocument,
    "\n    query getUser($username: String!) {\n      getUser(username: $username) {\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n        profile\n        background\n        friended\n        friendCount\n        posts {\n          id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        files\n        createdAt\n        }\n      }\n    }  \n": types.GetUserDocument,
    "\n    mutation resetPassword($id: String!, $password: String!){\n      resetPassword (id: $id, password: $password) {\n        id\n      }\n    }      \n": types.ResetPasswordDocument,
    "   \n    mutation updateUser($updateUser: UpdateUser!){\n      updateUser(input: $updateUser){\n        id\n      }\n    }\n": types.UpdateUserDocument,
    "\n    mutation updateUserBackground($background: String!){\n      updateUserBackground(background: $background){\n        id\n      }\n    }    \n": types.UpdateUserBackgroundDocument,
    " \n    mutation updateUserProfile($profile: String!){\n      updateUserProfile(profile: $profile){\n        id\n      }\n    }\n": types.UpdateUserProfileDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "    \n    mutation acceptFriend($friend: ID!) {\n      acceptFriend(friend: $friend) {\n        accepted\n      }\n    }\n"): (typeof documents)["    \n    mutation acceptFriend($friend: ID!) {\n      acceptFriend(friend: $friend) {\n        accepted\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation addFriend($friendInput: FriendInput!){\n      addFriend(friendInput: $friendInput){\n        sender {\n          username\n        }\n        receiver {\n          username\n        }\n        accepted\n      }\n    }    \n"): (typeof documents)["\n    mutation addFriend($friendInput: FriendInput!){\n      addFriend(friendInput: $friendInput){\n        sender {\n          username\n        }\n        receiver {\n          username\n        }\n        accepted\n      }\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "    \n    query getFriends{\n      getFriends{\n        sender {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        receiver {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        accepted\n      }\n}\n"): (typeof documents)["    \n    query getFriends{\n      getFriends{\n        sender {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        receiver {\n          id\n          firstName\n          lastName\n          username\n          profile\n        }\n        accepted\n      }\n}\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "    \n    mutation rejectFriend($friend: ID!){\n      rejectFriend(friend: $friend){\n        accepted\n      }\n    }\n"): (typeof documents)["    \n    mutation rejectFriend($friend: ID!){\n      rejectFriend(friend: $friend){\n        accepted\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createPost($post: NewPost!){\n       createPost(newPost: $post){\n        id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n"): (typeof documents)["\n    mutation createPost($post: NewPost!){\n       createPost(newPost: $post){\n        id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getCommentPost($postId: ID!) {\n      getCommentPost(postID: $postId){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        liked\n        likeCount\n        comments {\n            id\n            content\n            liked\n            likeCount\n            user {\n              firstName\n              lastName\n              username\n              profile\n              email\n              gender\n              dob\n            }\n        }\n      }\n    }\n"): (typeof documents)["\n    query getCommentPost($postId: ID!) {\n      getCommentPost(postID: $postId){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        liked\n        likeCount\n        comments {\n            id\n            content\n            liked\n            likeCount\n            user {\n              firstName\n              lastName\n              username\n              profile\n              email\n              gender\n              dob\n            }\n        }\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getPosts($pagination: Pagination!) {\n      getPosts(pagination: $pagination){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n"): (typeof documents)["\n    query getPosts($pagination: Pagination!) {\n      getPosts(pagination: $pagination){\n        id\n        user {\n          firstName\n          lastName\n          username\n          profile\n          email\n          gender\n          dob\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        comments {\n          id\n          content\n        }\n        files\n        createdAt\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation likePost($id: ID!){\n      likePost(postID: $id){\n        postId\n      }\n    }    \n"): (typeof documents)["\n    mutation likePost($id: ID!){\n      likePost(postID: $id){\n        postId\n      }\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createImageStory($story: NewImageStory!){\n      createImageStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n"): (typeof documents)["\n    mutation createImageStory($story: NewImageStory!){\n      createImageStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createTextStory($story: NewTextStory!){\n      createTextStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n"): (typeof documents)["\n    mutation createTextStory($story: NewTextStory!){\n      createTextStory(input: $story) {\n        id\n        user {\n          firstName\n          lastName\n          username\n        }\n        text\n      } \n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation activateUser($id: String!){\n      activateUser(id: $id){\n        id\n      }\n    }\n"): (typeof documents)["\n    mutation activateUser($id: String!){\n      activateUser(id: $id){\n        id\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation authenticateUser($email: String!, $password: String!){\n      authenticateUser(email: $email, password: $password)\n    }\n"): (typeof documents)["\n    mutation authenticateUser($email: String!, $password: String!){\n      authenticateUser(email: $email, password: $password)\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query checkActivateLink($id: String!){\n      checkActivateLink(id: $id)\n    }    \n"): (typeof documents)["\n    query checkActivateLink($id: String!){\n      checkActivateLink(id: $id)\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query checkResetLink($id: String!){\n      checkResetLink(id: $id)\n    }    \n"): (typeof documents)["\n    query checkResetLink($id: String!){\n      checkResetLink(id: $id)\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createUser($user: NewUser!){\n      createUser(input: $user){\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n      }\n    }\n\n"): (typeof documents)["\n    mutation createUser($user: NewUser!){\n      createUser(input: $user){\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n      }\n    }\n\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation forgotPassword($email: String!){\n      forgotPassword(email: $email)\n    }    \n"): (typeof documents)["\n    mutation forgotPassword($email: String!){\n      forgotPassword(email: $email)\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query getUser($username: String!) {\n      getUser(username: $username) {\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n        profile\n        background\n        friended\n        friendCount\n        posts {\n          id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        files\n        createdAt\n        }\n      }\n    }  \n"): (typeof documents)["\n    query getUser($username: String!) {\n      getUser(username: $username) {\n        id\n        firstName\n        lastName\n        username\n        email\n        dob\n        gender\n        active\n        profile\n        background\n        friended\n        friendCount\n        posts {\n          id\n        user {\n          firstName\n          lastName\n          profile\n        }\n        content\n        privacy\n        likeCount\n        commentCount\n        shareCount\n        liked\n        files\n        createdAt\n        }\n      }\n    }  \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation resetPassword($id: String!, $password: String!){\n      resetPassword (id: $id, password: $password) {\n        id\n      }\n    }      \n"): (typeof documents)["\n    mutation resetPassword($id: String!, $password: String!){\n      resetPassword (id: $id, password: $password) {\n        id\n      }\n    }      \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "   \n    mutation updateUser($updateUser: UpdateUser!){\n      updateUser(input: $updateUser){\n        id\n      }\n    }\n"): (typeof documents)["   \n    mutation updateUser($updateUser: UpdateUser!){\n      updateUser(input: $updateUser){\n        id\n      }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateUserBackground($background: String!){\n      updateUserBackground(background: $background){\n        id\n      }\n    }    \n"): (typeof documents)["\n    mutation updateUserBackground($background: String!){\n      updateUserBackground(background: $background){\n        id\n      }\n    }    \n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: " \n    mutation updateUserProfile($profile: String!){\n      updateUserProfile(profile: $profile){\n        id\n      }\n    }\n"): (typeof documents)[" \n    mutation updateUserProfile($profile: String!){\n      updateUserProfile(profile: $profile){\n        id\n      }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;