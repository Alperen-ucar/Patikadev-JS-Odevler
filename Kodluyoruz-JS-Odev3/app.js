const menu = [
    {
      id: 1,
      title: "Tteokbokki",
      category: "Korea",
      price: 10.99,
      img:
        "https://twoplaidaprons.com/wp-content/uploads/2020/09/tteokbokki-top-down-view-of-tteokbokki-in-a-bowl-500x500.jpg",
      desc: `Spicy rice cakes, serving with fish cake.`,
    },
    {
      id: 2,
      title: "Chicken Ramen",
      category: "Japan",
      price: 7.99,
      img:
        "https://www.forkknifeswoon.com/wp-content/uploads/2014/10/simple-homemade-chicken-ramen-fork-knife-swoon-01.jpg",
      desc: `Chicken noodle soup, serving with vegetables such as soy bean, green onion. In an optional you can ask for egg. `,
    },
    {
      id: 3,
      title: "Bibimbap",
      category: "Korea",
      price: 8.99,
      img:
        "https://dwellbymichelle.com/wp-content/uploads/2020/05/DWELL-bibimbap.jpg",
      desc: `Boiling vegetables, serving with special hot sauce`,
    },
    {
      id: 4,
      title: "Dan Dan Mian",
      category: "China",
      price: 5.99,
      img:
        "https://www.savingdessert.com/wp-content/uploads/2019/02/Dan-Dan-Noodles-10.jpg",
      desc: `Dan dan noodle, serving with green onion `,
    },
    {
      id: 5,
      title: "Yangzhou Fried Rice",
      category: "China",
      price: 12.99,
      img:
        "https://salu-salo.com/wp-content/uploads/2013/02/Yangzhou-Fried-Rice1.jpg",
      desc: `Yangzhou style fried rice, serving with bean and pickles `,
    },
    {
      id: 6,
      title: "Onigiri",
      category: "Japan",
      price: 9.99,
      img:
        "https://www.manusmenu.com/wp-content/uploads/2017/08/Onigiri-3-1-of-1.jpg",
      desc: `Rice Sandwich, serving with soy sauce`,
    },
    {
      id: 7,
      title: "Jajangmyeon",
      category: "Korea",
      price: 15.99,
      img:
        "https://www.curiouscuisiniere.com/wp-content/uploads/2020/04/Jajangmyeon-Korean-Noodles-in-Black-Bean-Sauce5.1200H-720x540.jpg",
      desc: `Black bean sauce noodle, serving with green onion `,
    },
    {
      id: 8,
      title: "Ma Yi Shang Shu",
      category: "China",
      price: 12.99,
      img:
        "https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/F688C2F6-86EC-46C4-B9C7-A6BA01DF7437/Derivates/32E3E72A-F786-406D-AF7F-B30980A9AC6C.jpg",
      desc: `Hot pepper sauce noodle, serving with soy bean and onion`,
    },
    {
      id: 9,
      title: "Doroyaki",
      category: "Japan",
      price: 3.99,
      img:
        "https://www.justonecookbook.com/wp-content/uploads/2011/10/Dorayaki-New-500x400.jpg",
      desc: `Red bean paste dessert, serving with honey.`,
    },
  ];
  
  
  const btngroup = document.querySelector(".btn-container");
          const arrayName = ['All', 'Korea', 'Japan', 'China'];
          const cityN = [];
  
          arrayName.forEach((name, index) => {
              let all = document.createElement("button");
              all.innerHTML = name;
              all.classList.add("btn", "btn-outline-dark", "mx-2");
              cityN.push(name);
              all.onclick = function () {
                  openCity(cityN[index]);
              };
              
              btngroup.appendChild(all);
          });
  
          document.querySelector(".row").innerHTML = menu.map(addMenu).join("");
  
  
  
          function addMenu(item) {
              let colDiv = document.createElement("div");
              let cardDivElement = document.createElement("div");
              let rowDiv = document.createElement("div");
              let cardDivBody = document.createElement("div");
              let imgDiv = document.createElement("div");
              let imgItem = document.createElement("img");
              let titleItem = document.createElement("h4");
              let priceItem = document.createElement("p");
              let pItem = document.createElement("p");
  
              cardDivElement.classList.add("card", "All", "col-md-6", "my-4", item.category);
              cardDivElement.style.backgroundColor = "#f1f5f8";
              cardDivElement.style.border = "none";
  
              colDiv.appendChild(cardDivElement);
              cardDivElement.appendChild(rowDiv);
              rowDiv.appendChild(imgDiv);
              imgDiv.appendChild(imgItem);
              rowDiv.appendChild(cardDivBody);
              cardDivBody.appendChild(titleItem);
              cardDivBody.appendChild(priceItem);
              cardDivBody.appendChild(pItem);
  
              
  
              rowDiv.classList.add("row");
  
              imgDiv.classList.add("col-md-3", "p-0", "mx-2");
  
              imgItem.style.width = "100%";
              imgItem.style.height = "13rem";
              imgItem.style.objectFit = "cover";
              imgItem.style.border = "5px solid black";
              imgItem.style.padding = "0";
              imgItem.style.borderRadius = "20px";
              imgItem.src = [item.img];
  
  
              cardDivBody.classList.add("col-md-5", "card-body", "p-0", "mx-3");
  
              titleItem.classList.add("card-title", "text-danger");
              titleItem.innerHTML = [item.title];
              titleItem.style.width = "80%";
              titleItem.style.display = "inline";
              titleItem.style.float = "left";
  
              priceItem.classList.add("card-text", "text-danger");
              priceItem.innerHTML = [item.price];
              priceItem.style.fontWeight = "bold";
              priceItem.style.fontSize = "20px";
  
              pItem.style.borderTop = "1px solid black"
              pItem.classList.add("card-text");
              pItem.style.width = "100%";
              pItem.innerHTML = [item.desc];
  
  
              return colDiv.innerHTML;
          }
  
          
          function openCity(cityN) {
              var x, y, i, tabcontent, tablinks;
              tabcontent = document.querySelectorAll(".card");
              for (i = 0; i < tabcontent.length; i++) {
                  tabcontent[i].style.display = "none";
              }
              tablinks = document.querySelectorAll(".btn");
              for (i = 0; i < tablinks.length; i++) {
                  tablinks[i].className = tablinks[i].className.replace(" active", "");
              }
              x = document.querySelectorAll(`.${cityN}`);
              for(y = 0; y < x.length; y++){
                  x[y].style.display = "block";
              }
              
          }
  