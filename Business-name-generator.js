function generateBusinessName() {

    const adj1 = "Crazy";
    const adj2 = "Amazing";
    const adj3 = "Fire";

    const shop1 = "Engine";
    const shop2 = "Foods";
    const shop3 = "Garments";

    const word1 = "Bros";
    const word2 = "Limited";
    const word3 = "Hub";

    const adjIndex = Math.floor(Math.random() * 3) + 1;
    const shopIndex = Math.floor(Math.random() * 3) + 1;
    const wordIndex = Math.floor(Math.random() * 3) + 1;

    let adjective, shop, word;

    if (adjIndex === 1) adjective = adj1;
    else if (adjIndex === 2) adjective = adj2;
    else adjective = adj3;

    if (shopIndex === 1) shop = shop1;
    else if (shopIndex === 2) shop = shop2;
    else shop = shop3;

    if (wordIndex === 1) word = word1;
    else if (wordIndex === 2) word = word2;
    else word = word3;

    return `${adjective} ${shop} ${word}`;
}

console.log(generateBusinessName());
