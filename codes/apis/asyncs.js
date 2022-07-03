"use strict";
// async with await
function delay(times) {
  return new Promise((resolve) => setTimeout(resolve, times));
}

async function getTiger() {
  await delay(2000);
  return "tiger";
}

async function getLion() {
  await delay(1000);
  //   throw "Erro";
  return "Lion";
}

async function showAnimals() {
  // then
  //   const lion = await getLion();
  //   const tiger = await getTiger();

  //   throw "Erro";
  //   try {
  //     const lion = await getLion();
  //     const tiger = await getTiger();
  //   } catch {
  //     return "Error";
  //   }

  // 병렬 처리
  const lionPromise = getLion();
  const tigerPromise = getTiger();
  const lion = await lionPromise;
  const tiger = await tigerPromise;

  return `${lion}, ${tiger}`;
}

showAnimals().then(console.log);

// useful Promise APIs
function showAllAnimals() {
  return Promise.all([getLion(), getTiger()]).then((animals) =>
    animals.join(",")
  );
}
showAllAnimals().then(console.log);

function showFirstAnimals() {
  return Promise.race([getLion(), getTiger()]);
}

showFirstAnimals().then(console.log);
