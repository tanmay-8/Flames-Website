//function for getting unique item of list
function getUnique(l1) {
  let unil = [];
  for (let i = 0; i < l1.length; i++) {
    if (unil.indexOf(l1[i]) == -1) {
      unil.push(l1[i]);
    }
  }
  return unil;
}

//function for creating char and count key value pair
function getCharcount(unil, l1) {
  let chcountl1 = [];

  for (let i = 0; i < unil.length; i++) {
    let chc = { char: unil[i], count: 0 };
    chcountl1.push(chc);
  }
  for (let i = 0; i < chcountl1.length; i++) {
    for (let j = 0; j < l1.length; j++) {
      if (chcountl1[i].char == l1[j]) {
        chcountl1[i].count++;
      }
    }
  }
  return chcountl1;
}

//function for deleting same chars and getting total sum
function getIndex(chcountl1, chcountl2) {
  for (let i = 0; i < chcountl1.length; i++) {
    for (let j = 0; j < chcountl2.length; j++) {
      if (chcountl1[i].char == chcountl2[j].char) {
        if (chcountl1[i].count == chcountl2[j].count) {
          chcountl1[i].count = 0;
          chcountl2[j].count = 0;
        } else if (chcountl1[i].count > chcountl2[j].count) {
          chcountl1[i].count = chcountl1[i].count - chcountl2[j].count;
          chcountl2[j].count = 0;
        } else if (chcountl1[i].count < chcountl2[j].count) {
          chcountl2[i].count = chcountl2[i].count - chcountl1[j].count;
          chcountl1[j].count = 0;
        }
      }
    }
  }

  let sum = 0;
  for (let i = 0; i < chcountl1.length; i++) {
    sum = sum + chcountl1[i].count;
  }
  for (let i = 0; i < chcountl2.length; i++) {
    sum = sum + chcountl2[i].count;
  }
  return sum;
}

function getRelate(sum) {
  let list1 = ["Friends", "love", "Affection", "Marriage", "Enemy", "Sibling"];
  while (list1.length > 1) {
    let index = sum;
    while (index > list1.length) {
      index = index - list1.length;
    }
    index = index - 1;
    let right = list1.slice(index + 1);
    let left = list1.slice(0, index);
    list1 = right.concat(left);
  }
  return list1[0];
}

let submit = document.getElementById("submit");
let name1i = document.getElementById("name1");
let name2i = document.getElementById("name2");
let result = document.getElementById("result");

submit.addEventListener("click", (e) => {
  e.preventDefault();
  try {
    let name1 = (name1i.value);
    let name2 = name2i.value;

    name1 = name1.toLowerCase();
    name2 = name2.toLowerCase();

    if (name1.length1 != 0 && name2.length != 0) {
      let l1 = name1.split("");
      let l2 = name2.split("");

      let unil1 = getUnique(l1);
      let unil2 = getUnique(l2);

      let chcountl1 = getCharcount(unil1, l1);
      let chcountl2 = getCharcount(unil2, l2);

      let sum = getIndex(chcountl1, chcountl2);

      let relate = getRelate(sum);

      result.innerHTML = "Relationship:" + relate;
      console.log(relate);
    } else {
      alert("Enter Two names");
    }
  } catch (error) {
    alert("Enter Two names");
  }
});
