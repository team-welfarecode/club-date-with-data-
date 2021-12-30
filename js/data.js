const qnaList= [
    {
        q: '1. 당신의 성별은?',
        a: [
            { answer: 'a. 남자', type: 1 },
            { answer: 'b. 여자', type: 1 },
        ]
    },
    {
        q: '2. 당신의 학년은?',
        a: [
            { answer: 'a. 고1', type: 2 },
            { answer: 'b. 고2', type: 2 },
            { answer: 'c. 고3', type: 1 },
        ]
    },
    {
        q: '3. 당신의 취향은?',
        a: [
            { answer: 'a. 섹시', type: 1 },
            { answer: 'b. 큐티', type: 2 },
            { answer: 'c. 청순', type: 3 },
            
        ]
    },
    {
        q: '4. 당신이 원하는 연인의 나이는?',
        a: [
            { answer: 'a. 연상', type: 1 },
            { answer: 'b. 동갑', type: 2 },
            { answer: 'c. 연하', type: 1 },
        ]
    },
    {
        q: '5. 당신이 원하는 연인의 키는?',
        a: [
            { answer: 'a. +10cm', type: 3 },
            { answer: 'b. +5cm', type: 2 },
            { answer: 'c. 비슷함', type: 1 },
            { answer: 'd. -5cm', type: 2 },
            { answer: 'e. -10cm', type: 3 }
        ]
    },
    {
        q: '6. 당신이 태어난 계절은?',
        a: [
            { answer: 'a. 봄(3~5월)', type:  1},
            { answer: 'b. 여름(6~8월)', type: 0 },
            { answer: 'c. 가을(9~11월)', type: 0 },
            { answer: 'd. 겨울(12~2월)', type: 3 },
        ]
    },
    {
        q: '7. 당신은 외향형? 내향형?',
        a: [
            { answer: 'a. 외향형(E)', type: 2 },
            { answer: 'b. 내향형(I)', type: 1 },
        ]
    },
    {
        q: '8. 당신은 감각형? 직관형?',
        a: [
            { answer: 'a. 감각형(S)', type: 2 },
            { answer: 'b. 직관형(N)', type: 1 },
        ]
    },
    {
        q: '9. 당신은 사고형? 감정형?',
        a: [
            { answer: 'a. 사고형(T)', type: 0 },
            { answer: 'b. 감정형(F)', type: 2 },
        ]
    },
    {
        q: '10. 당신은 판단형? 인식형?',
        a: [
            { answer: 'a. 판단형(J)', type: 1 },
            { answer: 'b. 인식형(P)', type: 2 },
        ]
    },
    {
        q: '11. 당신이 가장 좋아하는 음식은?',
        a: [
            { answer: 'a. 바삭바삭한 치킨', type: 3 },
            { answer: 'b. 치즈가 쭉 늘어나는 피자', type: 2 },
            { answer: 'c. 매콤달콤한 떡볶이', type: 4 },
            { answer: 'd. 니하오! 짜장면', type: 1 },
            { answer: 'e. 쫄깃쫄깃 족발', type: 1 }
        ]
    },
    {
        q: '12. 당신이 선택할 첫데이트 장소는?',
        a: [
            { answer: 'a. 숲 & 산책로', type: 4 },
            { answer: 'b. 놀이공원', type: 2 },
            { answer: 'c. 번화가', type: 3 },
            { answer: 'd. 카페', type: 4 },
            { answer: 'e. 미술관 & 박물관', type: 0 }
        ]
    },
    {
        q: '13. 당신이 이성친구와의 100일을 맞아 고른 단 한가지의 선물은?',
        a: [
            { answer: 'a. 우리 둘만의 커플 아이템', type: 3 },
            { answer: 'b. 마음이 담긴 손편지', type: 1 },
            { answer: 'c. 정성은 필요 없다! 값비싼 선물', type: 4 },
            { answer: 'd. 향기로운 그대의 마음, 향수', type: 1 },
            { answer: 'e. 누가 꽃이게? 꽃', type: 2 }
        ]
    },
    {
        q: '14. 오래간 짝사랑하던 그(그녀)... 오늘 나의 마음을 전하겠어! 당신의 고백 방법은?',
        a: [
            { answer: 'a. 난 직접 말하겠어!', type: 4 },
            { answer: 'b. 나는 신세대! 카톡으로 고백하자.', type: -4 },
            { answer: 'c. 사람의 심금을 울리는 것은 목소리지~ 난 전화로 고백하겠어!', type: 2 },
            { answer: 'd. 간지나게 DDP에서 공개고백으로!!', type: -8 },
            { answer: 'e. 으앙ㅠㅠ 못하겠어ㅠ 그(그녀)가 고백할 때까지 기다리겠어', type: 0 }
        ]
    },
    {
        q: '15. 마침내 사귀게 된 그(그녀). 당신이 선호하는 연애스타일은?',
        a: [
            { answer: 'a. 편-안 친구 같은 편안한 연애', type: 2 },
            { answer: 'b. 쪽쪽♥ 열렬하고 찐득한 연애', type: 4 },
            { answer: 'c. 난 너밖에 없어! 서로 의지하는 연애', type: 3 },
            { answer: 'd. 너는 너! 나는 나! 자유로운 연애', type: 1 },
        ]
    },
]
