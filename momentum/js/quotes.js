const quotes = [
//quote_EN: "",
//quote_KR: "",
//author: "",
    {
        quote_EN: "When you go through hardships and decide not to surrender, that is strength",
        quote_KR: "당신이 어려움을 겪고 항복하지 않기로 결정할 때, 그것이 힘이다.",
        author: "Arnold Schwarzenegger",
    },
    {
        quote_EN: "It is kind of fun to do the impossible.",
        quote_KR: "불가능을 하는 것은 좀 재미있다.",
        author: "Walt Disney",
    },
    {
        quote_EN: "There are better starters than me but I’m a strong finisher.",
        quote_KR: "나보다 시작이 나은 선수들이 있겠지만, 나는 끝이 강한 선수다.",
        author: "Usain Bolt",
    },
    {
        quote_EN: "Tough times never last, but tough people do.",
        quote_KR: "힘든 시간들은 절대로 오래가지 않지만, 강인한 사람들은 오래 간다.",
        author: "Robert H. Schuller",
    },
    {
        quote_EN: "I’ve failed over and over and over again in my life and that is why I succeed.",
        quote_KR: "나는 인생에서 몇 번이고 반복해서 실패했고 그것이 내가 성공한 이유이다.",
        author: "Michael Jordan",
    },
    {
        quote_EN: "If you don’t get out of the box you’ve been raised in, you won’t understand how much bigger the world is.",
        quote_KR: "당신이 키워진 틀에서 벗어나지 못한다면, 세상이 얼마나 더 큰지 이해하지 못할 것이다.",
        author: "Angelina Jolie",
    },
    {
        quote_EN: "But I know, somehow, that only when it is dark enough can you see the stars.",
        quote_KR: "하지만 저는 왠지 충분히 어두울 때만 여러분들이 별을 볼 수 있다는 것을 압니다.",
        author: "Martin Luther King, Jr",
    },
    {
        quote_EN: "Grind Hard, Shine Hard.",
        quote_KR: "열심히 갈고, 열심히 빛납시다.",
        author: "Dwayne Johnson",
    },
    {
        quote_EN: "I never dreamed about success, I worked for it.",
        quote_KR: "나는 결코 성공에 대해 꿈꾸지 않았다, 나는 꿈을 위해 행동했다.",
        author: "Estée Lauder",
    },
    {
        quote_EN: "Some people dream of success, while other people get up every morning and make it happen.",
        quote_KR: "성공을 꿈꾸는 사람들도 있지만, 매일 아침에 일어나 꿈을 실현시키는 사람들도 있다.",
        author: "Wayne Huizenga",
    },
    {
        quote_EN: "The only thing worse than starting something and failing...is not starting something.",
        quote_KR: "무언가를 시작하고 실패하는 것보다 더 나쁜 것은..아무것도 시작하지 않는 것이다.",
        author: "Seth Godin",
    },
    {
        quote_EN: "If you really want to do something, you'll find a way. If you do not, you'll find an excuse.",
        quote_KR: "무언가를 정말 하고 싶다면, 당신은 방법을 찾을 것이다. 그렇지 않다면, 변명을 찾을 것이다.",
        author: "Jim Rohn",
    }
];//12개
const quote_EN = quote.querySelector("span:first-child");
const quote_KR = quote.querySelector("span:nth-child(3)");
const author = quote.querySelector("span:last-child");

const todaysQuotes = quotes[Math.floor(Math.random() * quotes.length)];

quote_EN.innerText = todaysQuotes.quote_EN;
quote_KR.innerText = todaysQuotes.quote_KR;
author.innerText = todaysQuotes.author;