new Vue({
  el:"#store",
  data:{
    name:"",
    type:"",
    price:"",
    brand:"",
    selected:false,
  img:"https://www.freeiconspng.com/thumbs/no-image-icon/no-image-icon-15.png",
    mess:"",
    
    instrument:[
      {
        name: "Drums",
        type: "Percussion",
        price: "$700",
        brand: "Maton", 
        color:"blue",
        selected:false,
        img:"https://images-na.ssl-images-amazon.com/images/I/81pOUriqyyL._AC_SX569_.jpg",
       
      },
      {
        name: "Guitar",
        type: "String",
        price: "$300",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://media.istockphoto.com/photos/acoustic-guitar-picture-id173240169?k=6&m=173240169&s=612x612&w=0&h=EsjT2PtVHZRoI-VxOHEzQhUD6YKDBgZmGcQTpmwjJZI="
      },
      {
        name: "Violin",
        type: "String",
        price: "$400",
        brand: "Yamaha",
        color:"green",
       selected:false, img:"http://static1.squarespace.com/static/5a85b1c74c0dbf01b78b3e77/5d8cf85257a2aa1fb764ba8d/5d95f77bafaef17e6444ca29/1571750047982/violin-and-bow-square.jpg?format=1500w"
      },
      {
        name: "Flute",
        type: "Woodwind",
        price: "$400",
        brand: "Fender",
        color:"red",
       selected:false, img:"https://media.musicarts.com/is/image/MMGS7/J14680000001000-00-600x600.jpg"
      },
      {
        name: "Trumpet",
        type: "Brass",
        price: "$200",
        brand: "Maton",
       color:"blue", 
        selected:false,
img:"https://d1aeri3ty3izns.cloudfront.net/media/26/261159/600/preview_1.jpg",
        
      },
      {
        name: "Piano",
        type: "String",
        price: "$900",
        brand: "Yamaha",
        color:"green",
        selected:false,
 img:"https://www.musikalessons.com/blog/wp-content/uploads/2017/06/grand-piano-.jpg"
      }
    ],
    cart: []
  },
  methods:{
    popUp:function (x) {
      this.instrument[x].selected = !this.instrument[x].selected;
    },
     popUp2:function () {
     this.selected = !this.selected;
    },
    submit:function(item,x){
      // this.cart.push(this.instrument[x]);
      this.instrument[x].selected=false;
    this.instrument.splice(x,1);
     this.cart.push(item);
      
      return this.instrument
      
    },
    emptyCart:function(x){
     
      this.instrument= this.instrument.concat(this.cart); 
      this.cart=[];
     
    },
  
  newInstrument:function(){
    this.instrument.push({
      name:this.name,
      type:this.type,
      price:this.price,
      brand:this.brand,
      img:this.img,
      selected:false
    });this.selected = !this.selected;
  } 
},
  watch:{
    name:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    type:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    brand:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    },
    price:function(){
      if (!this.name || !this.type || !this.brand || !this.price){
        this.mess="Form not complete"
      } 
      else{this.mess="You may now submit"}
    }
      
    
    
  }
   
})