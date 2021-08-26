const express = require('express');
var cors = require('cors')
const app = express();


app.use(cors());
const alphabets=[
    {id:1, alpha:"A",name:"Apple",image_link:"https://purepng.com/public/uploads/large/purepng.com-fresh-applefoodsweettastyhealthyfruitappleleaf-981524677946vfurf.png"},
    {id:2, alpha:"B",name:"Ball",image_link:"https://www.pngall.com/wp-content/uploads/5/Sports-Ball-Transparent.png"},
    {id:3, alpha:"C",name:"Cat",image_link:"https://purepng.com/public/uploads/large/cat-f86.png"},
    {id:4, alpha:"D",name:"Dog",image_link:"https://pngimg.com/uploads/dog/dog_PNG50348.png"},
    {id:5, alpha:"E",name:"Elephant",image_link:"https://www.freepnglogos.com/uploads/elephant-png/african-elephant-transparent-background-18.png"},
    {id:6, alpha:"F",name:"Fish",image_link:"https://www.freepnglogos.com/uploads/fish-png/fish-water-transparent-png-pictures-icons-and-png-6.png"},
    {id:7, alpha:"G",name:"Grass",image_link:"https://www.freepnglogos.com/uploads/nature-png/grass-images-download-grass-transparent-backgound-19.png"},
    {id:8, alpha:"H",name:"Hen",image_link:"https://purepng.com/public/uploads/large/chicken-uwv.png"},
    {id:9, alpha:"I",name:"Ice Cream",image_link:"https://www.freepnglogos.com/uploads/ice-cream-png/ice-cream-cone-png-transparent-image-pngpix-1.png"},
    {id:10, alpha:"J",name:"Joker",image_link:"https://www.freepnglogos.com/uploads/clown-png/joker-clown-tubes-clowns-page-5.png"},
    {id:11, alpha:"K",name:"Kite",image_link:"https://www.freepnglogos.com/uploads/kite-png/kite-gary-adopts-4.png"},
    {id:12, alpha:"L",name:"Lollipop",image_link:"https://www.freepnglogos.com/uploads/lollipop-png/lollipop-genes-gifs-animados-genes-caramelos-6.png"},
    {id:13, alpha:"M",name:"Mango",image_link:"https://www.freepnglogos.com/uploads/mango-png/mango-5.png"},
    {id:14, alpha:"N",name:"Nest",image_link:"https://purepng.com/public/uploads/large/purepng.com-bird-nestnatureeggbirdnest-9615246762133qz8l.png"},
    {id:15, alpha:"O",name:"Orange",image_link:"https://purepng.com/public/uploads/large/purepng.com-orange-orangeorangefruitbitter-orangeorangesclip-art-17015273374288pjtg.png"},
    {id:16, alpha:"P",name:"Peacock",image_link:"https://www.freepnglogos.com/uploads/peacock-png/download-peacock-feather-png-transparent-image-and-10.png"},
    {id:17, alpha:"Q",name:"Queen",image_link:"https://www.pinclipart.com/picdir/big/1-15056_to-download-click-clipart-images-of-queen-png.png"},
    {id:18, alpha:"R",name:"Rat",image_link:"https://purepng.com/public/uploads/large/white-rat-gb0.png"},
    {id:19, alpha:"S",name:"Snake",image_link:"https://www.freepnglogos.com/uploads/snake-png/download-cobra-snake-png-image-pngimg-7.png"},
    {id:20, alpha:"T",name:"Tiger",image_link:"https://www.freepnglogos.com/uploads/tiger-png/download-tiger-png-image-download-tigers-png-image-7.png"},
    {id:18, alpha:"U",name:"Umberalla",image_link:"https://purepng.com/public/uploads/large/purepng.com-umbrella-pinkobjectsumbrellarain-6315218828580cb5c.png"},
    {id:19, alpha:"V",name:"Van",image_link:"https://www.pngpix.com/wp-content/uploads/2016/10/PNGPIX-COM-Van-PNG-Image.png"},
    {id:20, alpha:"W",name:"Watch",image_link:"https://purepng.com/public/uploads/large/purepng.com-womens-wrist-band-watchclockbelltimealarmwristbandwomens-1421526465762itj2z.png"},
    {id:21, alpha:"X",name:"X-mas",image_link:"https://purepng.com/public/uploads/large/christmas-tree-with-gifts-mms.png"},
    {id:22, alpha:"Y",name:"Yak",image_link:"https://i.dlpng.com/static/png/6924246_preview.png"},
    {id:23, alpha:"Z",name:"Zebra",image_link:"https://pngimg.com/uploads/zebra/zebra_PNG8965.png"},
];

//multiple alphabets
app.get('/aphabets', (req,res)=>{
    res.send(alphabets);
});

//single alphabet
app.get('/aphabets/:id', (req,res)=>{
    const alphabet = alphabets.find(a=>a.id === parseInt(req.params.id));
    if(!alphabet) res.status(404).send('The alphabet you choosen is not there');
    res.send(alphabet);
});

const PORT = process.env.PORT||8080;

app.listen(PORT, ()=>console.log(`App is running on port ${PORT}`));