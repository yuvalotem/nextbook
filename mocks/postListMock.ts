import type { Post } from "../pages/api/posts";
import { contactListMock } from "./contactListMock";

export const postListMock: Post[] = [
    {
        account: contactListMock[0],
        content: { text: 'This is my first post, I decided to upload it because I really like the desgin of this app' },
        date: new Date('3 April 2023 14:48'),
        likes: { num: 12, checked: true },
        shares: 2,
        comments: [
            { text: "you are welcome" },
            { text: "yessss" },
            { text: "Hello" },
            { text: "Nice to meet you" },
            { text: "some more greetings" },
        ],
        id: '0'
    },
    {
        account: contactListMock[2],
        content: { text: 'I just love cats', imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" },
        date: new Date('7 March 2023 18:48'),
        likes: { num: 1, checked: false },
        comments: [],
        id: '1'
    },
    {
        account: contactListMock[5],
        content: { text: 'ooohhhhhh wiiiiii' },
        date: new Date('7 March 2023 18:48'),
        likes: { num: 4506, checked: false },
        comments: [],
        id: '2'
    },
    {
        account: contactListMock[1],
        content: { text: 'This is a very popular post, I just love this app' },
        date: new Date('8 April 2023 18:48'),
        likes: { num: 90, checked: false },
        comments: [
            { text: "you are right" },
            { text: "cooool" },
            { text: "Hello" },
            { text: "Nice to meet you" },
            { text: "this is a comment" },
            { text: "This is another one" },
            { text: "some more" },
            { text: "almost last" },
            { text: "some more greetings" },
        ],
        id: '3'
    }
]
