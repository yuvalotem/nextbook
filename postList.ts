import { Post } from "./pages/api/posts";

export const postList: Post[] = [
    {
        account: { name: 'John Doe', imageUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTv5T9G-B_94Liv4WQ2W-ulYpOqYM_0Yq6su6KgzQEzHU1InT6k-xEMNQvydTUrtqcPQio&usqp=CAU" },
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
        id: '1'
    },
    {
        account: { name: 'Beti House' },
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
        id: '2'
    },
    {
        account: { name: 'Cat lover', imageUrl: "https://images.hindustantimes.com/img/2022/08/07/1600x900/cat_1659882617172_1659882628989_1659882628989.jpg" },
        content: { text: 'I just love cats', imageUrl: "https://i.guim.co.uk/img/media/26392d05302e02f7bf4eb143bb84c8097d09144b/446_167_3683_2210/master/3683.jpg?width=1200&quality=85&auto=format&fit=max&s=a52bbe202f57ac0f5ff7f47166906403" },
        date: new Date('7 March 2023 18:48'),
        likes: { num: 1, checked: false },
        comments: [],
        id: '3'
    }
]
