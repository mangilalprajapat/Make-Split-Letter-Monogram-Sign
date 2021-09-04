 document.querySelector('.preview-modal').style.display = 'none';
  alphabets = 
  {
    a: {
      fontPercentage: 13.4,
      textXPercentage: 50,
      textYPercentage: 54.7
    },
    b: {
      fontPercentage: 13.5,
      textXPercentage: 50,
      textYPercentage: 54.8
    },
    c: {
      fontPercentage: 12.7,
      textXPercentage: 50,
      textYPercentage: 54
    },
    d: {
      fontPercentage: 12.9,
      textXPercentage: 50,
      textYPercentage: 54
    },
    e: {
      fontPercentage: 13.4,
      textXPercentage: 50,
      textYPercentage: 54.3
    },
    f: {
      fontPercentage: 13.4,
      textXPercentage: 50,
      textYPercentage: 54.3
    },
    g: {
      fontPercentage: 12.9,
      textXPercentage: 50,
      textYPercentage: 54.1
    },
    h: {
      fontPercentage: 13.4,
      textXPercentage: 50,
      textYPercentage: 54.3
    },
    i: {
      fontPercentage: 13.4,
      textXPercentage: 50,
      textYPercentage: 54.3
    },
    j: {
      fontPercentage: 11.1,
      textXPercentage: 50,
      textYPercentage: 43.5
    },
    k: {
      fontPercentage: 13.5,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    l: {
      fontPercentage: 13.5,
      textXPercentage: 50,
      textYPercentage: 54.1
    },
    m: {
      fontPercentage: 12.6,
      textXPercentage: 50,
      textYPercentage: 54
    },
    n: {
      fontPercentage: 13.5,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    o: {
      fontPercentage: 12.8,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    p: {
      fontPercentage: 13.2,
      textXPercentage: 50,
      textYPercentage: 54.8
    },
    q: {
      fontPercentage: 12.8,
      textXPercentage: 50,
      textYPercentage: 53.8
    },
    r: {
      fontPercentage: 12.8,
      textXPercentage: 50,
      textYPercentage: 54.4
    },
    s: {
      fontPercentage: 12.9,
      textXPercentage: 50,
      textYPercentage: 54.7
    },
    t: {
      fontPercentage: 12.6,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    u: {
      fontPercentage: 12.6,
      textXPercentage: 50,
      textYPercentage: 54.7
    },
    v: {
      fontPercentage: 12.7,
      textXPercentage: 50,
      textYPercentage: 54.9
    },
    w: {
      fontPercentage: 13.5,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    x: {
      fontPercentage: 12.5,
      textXPercentage: 50,
      textYPercentage: 54.5
    },
    y: {
      fontPercentage: 12.9,
      textXPercentage: 50,
      textYPercentage: 54.7
    },
    z: {
      fontPercentage: 12.8,
      textXPercentage: 50,
      textYPercentage: 54.5
    }
  }

  var getAlphabetDetails = (initial) => {
    
    var alphabet;
    
    switch(initial) {
      case "A": 
        alphabet = alphabets.a; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/A_1280x800.jpg?v=8695865315874690931";
        break;
      case "B": 
        alphabet = alphabets.b; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/B_1280x800.jpg?v=12154917253218045219";
        break;
      case "C": 
        alphabet = alphabets.c;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/C_1280x800.jpg?v=6273054239968894077";
        break;
      case "D": 
        alphabet = alphabets.d; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/D_1280x800.jpg?v=5134219797084278006";
        break;
      case "E": 
        alphabet = alphabets.e; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/E_1280x800.jpg?v=12449069192439828204";
        break;
      case "F": 
        alphabet = alphabets.f; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/F_1280x800.jpg?v=12045909021086149023";
        break;
      case "G": 
        alphabet = alphabets.g; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/G_1280x800.jpg?v=7820552292855464453";
        break;
      case "H": 
        alphabet = alphabets.h; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/H_1280x800.jpg?v=6340607191570145881";
        break;
      case "I": 
        alphabet = alphabets.i; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/I_1280x800.jpg?v=5884642584594871045";
        break;
      case "J": 
        alphabet = alphabets.j; 
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/J_1280x800.jpg?v=165070272264540022";
        break;
      case "K": 
        alphabet = alphabets.k;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/K_1280x800.jpg?v=15824354445510243739";
        break;
      case "L": 
        alphabet = alphabets.l;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/L_1280x800.jpg?v=10214102700283863998";
        break;
      case "M": 
        alphabet = alphabets.m;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/M_1280x800.jpg?v=12226151063495741044";
        break;
      case "N": 
        alphabet = alphabets.n;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/N_1280x800.jpg?v=2470450757433992751";
        break;
      case "O": 
        alphabet = alphabets.o;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/O_1280x800.jpg?v=4618617796694780377";
        break;
      case "P": 
        alphabet = alphabets.p;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/P_1280x800.jpg?v=5896254734022408451";
        break;
      case "Q": 
        alphabet = alphabets.q;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/Q_1280x800.jpg?v=5130686266423890262";
        break;
      case "R": 
        alphabet = alphabets.r;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/R_1280x800.jpg?v=11809625122421046668";
        break;
      case "S": 
        alphabet = alphabets.s;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/S_1280x800.jpg?v=14763407044404593839";
        break;
      case "T": 
        alphabet = alphabets.t;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/T_1280x800.jpg?v=16398958349797825851";
        break;
      case "U": 
        alphabet = alphabets.u;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/U_1280x800.jpg?v=15474167236285165829";
        break;
      case "V": 
        alphabet = alphabets.v;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/V_1280x800.jpg?v=14131357611992518594";
        break;
      case "W": 
        alphabet = alphabets.w;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/W_1280x800.jpg?v=13931373738296921759";
        break;
      case "X": 
        alphabet = alphabets.x;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/X_1280x800.jpg?v=13848956025366691881";
        break;
      case "Y": 
        alphabet = alphabets.y;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/Y_1280x800.jpg?v=15389719407505377774";
        break;
      case "Z": 
        alphabet = alphabets.z;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/Z_1280x800.jpg?v=4348112264498074459";
        break;
      default:
        alphabet = alphabets.w;
        alphabet.image = "https://cdn.shopify.com/s/files/1/0014/4598/6378/t/46/assets/W_1280x800.jpg?v=13931373738296921759";
    }
    
    return alphabet;
  };