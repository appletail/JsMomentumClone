import { getRandomNum } from "./utils.js";


const quotes = [
  {
    quote: '중요한건 꺾이지 않는 마음',
    author: '인터넷 밈',
  },
  {
    quote: '따땃하다~',
    author: '불타는 내 발등',
  },
  {
    quote: '중요한건 꺾여도 그냥하는 것',
    author: '인터넷 밈',
  },
  {
    quote: '지식보다 중요한 것은 상상력이다.',
    author: '알버트 아인슈타인',
  },
  {
    quote: '어떤 사람들은 3루에 태어났지만 자신이 3루타를 쳤다고 생각하면서 인생을 산다.',
    author: '배리 스윗처',
  },
  {
    quote: '인생은 가까이서 보면 비극이지만 멀리서 보면 희극이다',
    author: '찰리 채플린',
  },
  {
    quote: '반성하지 않는 삶은 살 가치가 없다.',
    author: '소크라테스',
  },
  {
    quote: '인내할 수 있는 사람은 그가 바라는 것은 무엇이든지 손에 넣을 수 있다.',
    author: '벤자민 프랭클린',
  },
  {
    quote: '행복하게 여행하려면 가볍게 여행해야 한다.',
    author: '생텍쥐페리',
  },
  {
    quote: '삶의 원동력은 무엇일까? 첫째도 욕망, 둘째도 욕망, 셋째도 욕망이다.',
    author: '스텐리 쿠닛츠',
  },
  {
    quote: '약간의 광기도 없는 위대한 천재란 있을 수 없다. ',
    author: '아리스토텔레스',
  },
];

const quote = document.querySelector('#quote span:first-child');
const author = document.querySelector('#quote span:last-child');

const todaysQuote = quotes[getRandomNum(0, quotes.length - 1)];

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;