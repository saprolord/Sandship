function factorycalc() {

  'This is the main function to call out to create the recipe tree as selected in the "desired material" field at the rate defined in "desired rate"'
  'This body sets up all the first level recipes as a MatDef class (see constructor further down)'
  'MatDef class format: (name, factory:[Factory ID, production rate],recipe:[material1,material2,...],quantity: [material1 requirement, material2 requirement, ...], material ID)'
  'FactoryIDs: SubGenerator=0, Synthesizer=1, Heater=2, Press=3, Cutter=4'
  'Extruder=5, Shaper=6, Mixer (Metal)=7, MechAss=8, Applier=9, Blower=10, Open Pipe=11'
  'ElecAss=12, Crusher=13, Grower=14, Compressor=15, Chemical Plant=16, Chemical Mixer=17'


  const substance = new MatDef("Substance", [0, 1], 0, [1],0);
  const iron = new MatDef("Iron Ore", [1, 30], [substance], [1], 1);
  const carbon = new MatDef("Carbon", [1, 30], [substance], [1], 2);
  const copper = new MatDef("Copper Ore", [1, 30], [substance], [1], 3);
  const steel = new MatDef("Steel", [7, 2.5], [carbon, iron], [1,2], 4);
  const silicon = new MatDef("Silicon", [1, 30], [substance], [1], 5);
  const sulfur = new MatDef("Sulfur", [1, 30], [substance], [1], 6);
  const titanium = new MatDef("Titanium", [1, 30], [substance], [1], 7);
  const mercury = new MatDef("Mercury", [1, 30], [substance], [1],  8);
  const iron_plate=new MatDef("Iron Plate", [3,2.5],[iron],[2],9);
  const steel_plate = new MatDef("Steel Plate", [3, 5/3], [steel], [3], 10);
  const copper_plate = new MatDef("Copper Plate", [3, 2.5], [copper], [2], 11);
  const glass = new MatDef("Glass", [2, 6.5], [silicon], [1], 19);
  const glass_plate = new MatDef("Glass Plate", [3, 2.5], [glass], [2], 12);
  const iron_rod = new MatDef("Iron Rod", [4, 2.5], [iron], [0.5], 13);
  const steel_rod = new MatDef("Steel Rod",[4,2.5],[steel_plate],[0.5],14);
  const copper_rod = new MatDef("Copper Rod", [4, 2.5], [copper_plate], [0.5], 15);
  const iron_wire = new MatDef("Iron Wire", [4, 2.5], [iron_rod], [2], 16);
  const copper_wire = new MatDef("Copper Wire", [4, 2.5], [copper_rod], [2], 17);
  const steel_spring = new MatDef("Steel Spring",[5,5],[steel_rod],[5/4],18);
  const glass_tube = new MatDef("Glass Tube",[10,5],[glass],[3],20);
  const glass_sphere = new MatDef("Glass Sphere",[10,5],[glass_tube],[3],21);
  const glass_bottle = new MatDef("Glass Bottle",[10,5],[glass_tube],[2],22);
  const iron_bolt = new MatDef("Iron Bolt",[6,1.33],[iron_rod],[2],23);
  const steel_gear = new MatDef("Steel Gear", [6,5],[steel_plate],[3/4],24);
  const steel_chain = new MatDef("Steel Chain",[8,5],[steel_rod],[3],25);
  const steel_pipe = new MatDef("Steel Pipe",[8,5],[steel_plate],[3],26);
  const steel_barrel = new MatDef("Steel Barrel",[6,5],[steel_plate],[2],27);
  const gearbox = new MatDef("Gearbox",[8,5],[iron_bolt,iron_plate,steel_gear],[2,2,2],28);
  const gas_tank = new MatDef("Gas Tank",[8,5],[steel_gear,steel_pipe],[2,1],29);
  const ammo = new MatDef("Ammunition",[8,5],[iron],[3],30);
  const steel_ammo = new MatDef("Steel Ammunition",[8,2.5],[steel],[3],31);
  const iron_powder = new MatDef("Iron Powder", [13, 5 / 3], [iron], [3], 32);
  const carbon_powder = new MatDef("Carbon Powder", [13, 5 / 3], [carbon], [3], 33);
  const sulfur_powder = new MatDef("Sulfur Powder", [13, 5 / 3], [sulfur], [3], 34);
  const titanium_powder = new MatDef("Titanium Powder", [13, 5 / 3], [titanium], [3], 35);
  const mercury_powder = new MatDef("Mercury Powder", [13, 5 / 3], [mercury], [3], 36);
  const gunpowder = new MatDef("GunPowder",[7,2.5],[carbon_powder,sulfur_powder],[1,2],37);
  const rocket = new MatDef("Rocket",[8,2.5],[steel_pipe,gunpowder],[2,2],38);
  const circuit = new MatDef("Circuit Board",[12,2],[copper_wire,iron_plate],[2,2],39);
  const hydrogen = new MatDef("Hydrogen", [1, 20], [substance], [1], 40);
  const oxygen = new MatDef("Oxygen", [1, 20], [substance], [1], 41);
  const nitrogen = new MatDef("Nitrogen", [1, 20], [substance], [1], 42);
  const water = new MatDef("Water",[17,5],[hydrogen,oxygen],[2,1],43);
  const algae = new MatDef("Algae",[14,2.5],[water],[1],44);
  const crude_oil = new MatDef("Crude Oil",[15,10],[water,algae],[0.5,0.25],45);
  const heavy_oil = new MatDef("Heavy Oil", [16, 2 / 3], [crude_oil], [3], 46);
  const light_oil = new MatDef("Light Oil", [16, 2 / 3], [crude_oil], [3], 47);
  const sulfuric_acid = new MatDef("Sulfuric Acid",[11,1],[water,sulfur_powder],[5,3],48);
  const plastic = new MatDef("Plastic",[16,5/3],[carbon,light_oil],[3,1],49);
  const plastic_plate = new MatDef("Plastic Plate", [6, 2.5], [plastic], [2], 50);
  const water_barrel = new MatDef("Steel Barrel: Water", [9, 2.5], [water, steel_barrel], [5, 1], 51);
  const crude_oil_barrel = new MatDef("Steel Barrel: Crude Oil", [9, 2.5], [crude_oil, steel_barrel], [5, 1], 52);
  const light_oil_barrel = new MatDef("Steel Barrel: Light Oil", [9, 2.5], [light_oil, steel_barrel], [5, 1], 53);
  const heavy_oil_barrel = new MatDef("Steel Barrel: Heavy Oil", [9, 2.5], [heavy_oil, steel_barrel], [5, 1], 54);
  const hydrogen_tank = new MatDef("Gas Tank: Hydrogen", [9, 2.5], [hydrogen, gas_tank], [5, 1], 55);
  const oxygen_tank = new MatDef("Gas Tank: Oxygen", [9, 2.5], [oxygen, gas_tank], [5, 1], 56);
  const nitrogen_tank = new MatDef("Gas Tank: Nitrogen", [9, 2.5], [nitrogen, gas_tank], [5, 1], 57);
  const water_bottle = new MatDef("Bottle: Water", [9, 2.5], [water, glass_bottle], [5, 1], 58);
  const sulf_acid_bottle = new MatDef("Bottle: Sulfuric Acid", [9, 2.5], [sulfuric_acid, glass_bottle], [5, 1], 59);

  const black_ink = new MatDef("Carbon Black", [11, 2.5], [heavy_oil, carbon_powder], [1, 3], 200);
  const white_ink = new MatDef("Titanium White", [11, 2.5], [heavy_oil, titanium_powder], [1, 3], 201);
  const yellow_ink = new MatDef("Casablanca", [11, 2.5], [heavy_oil, sulfur_powder], [1, 3], 202);
  const red_ink = new MatDef("Red Mercury", [11, 2.5], [heavy_oil, mercury_powder], [1, 3], 203);
  const blue_ink = new MatDef("Summer Sky Blue", [11, 2.5], [heavy_oil, iron_powder], [1, 3], 204);

  const black_ink_bottle = new MatDef("Bottle: Carbon Black", [9, 2.5], [black_ink, glass_bottle], [5, 1], 60)
  const white_ink_bottle = new MatDef("Bottle: Titanium White", [9, 2.5], [white_ink, glass_bottle], [5, 1], 61)
  const yellow_ink_bottle = new MatDef("Bottle: Casablanca", [9, 2.5], [yellow_ink, glass_bottle], [5, 1], 62)
  const red_ink_bottle = new MatDef("Bottle: Red Mercury", [9, 2.5], [red_ink, glass_bottle], [5, 1], 63)
  const blue_ink_bottle = new MatDef("Bottle: Summer Sky Blue", [9, 2.5], [blue_ink, glass_bottle], [5, 1], 64)

  '________________________'
  'GLOBAL VARIABLES'
  'Material data matrix'
  materialdata = [substance, iron, carbon, copper, steel, silicon, sulfur, titanium,
  mercury, iron_plate, steel_plate, copper_plate, glass_plate, iron_rod, steel_rod, 
  copper_rod, iron_wire, copper_wire, steel_spring, glass, glass_tube, glass_sphere,
  glass_bottle, iron_bolt,steel_gear,steel_chain,steel_pipe,steel_barrel,gearbox,
  gas_tank,ammo,steel_ammo,iron_powder,carbon_powder,sulfur_powder,titanium_powder,
  mercury_powder,gunpowder,rocket,circuit,hydrogen,oxygen,nitrogen,water,algae,
  crude_oil,heavy_oil,light_oil,sulfuric_acid,plastic,plastic_plate, water_barrel,
  crude_oil_barrel,light_oil_barrel,heavy_oil_barrel,hydrogen_tank,oxygen_tank,
  nitrogen_tank, water_bottle, sulf_acid_bottle,black_ink_bottle, white_ink_bottle, 
  yellow_ink_bottle, red_ink_bottle, blue_ink_bottle, black_ink,white_ink, yellow_ink,
  red_ink, blue_ink];
  'Total required for each material array initialisation'
  materialtotal = [0];
  materialtotal.length = materialdata.length;
  zero(materialtotal);
  '_________________________'
  'END OF GLOBAL VARIABLE'

  'Get user input'
  var index = document.getElementById('material').value;
  var rate = document.getElementById('rate').value;

   'Get the main div element where the tree will appear and clear it'
  var treeBox = document.getElementById('TreeTop');
  erase('TreeTop');
  erase('subBox3');
  'Create the first "treeBox" div element'
  createTreeLevel('TreeTop', 'tree10000');

  for (i = 0; i < materialdata.length; i++) {
    createMatOutputBox(i);
  }
  'Launch main function to calculate the required materials'
  calculate(materialdata[index], rate, 'tree10000', 10000);

  'update and show the div element with the required material'
  materialOutput();
  document.getElementById("TreeTop").style.display = "flex";
  document.getElementById("box3").style.display = "flex";

  'create the tier buttons'
  createTierButton();


  'adjust the div boxes if the screen is narrow'
  if (window.matchMedia("(max-width: 800px)").matches) {
    document.getElementById("box3").style.width = "100%";
    "document.getElementById('box3').scrollIntoView()"
  } else {
    document.getElementById("box3").style.width = "30%";
  }
'END'
}


function findIcon(id) {
  //returns the url to the picture of the material identified by "id"
  if (id == 0) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Substance_Fake.png" };
  if (id == 1) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Ore.png" };
  if (id == 2) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Carbon.png" };
  if (id == 3) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Copper.png" };
  if (id == 4) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Ore.png" };
  if (id == 5) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Silicon.png" };
  if (id == 6) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Sulfur.png" };
  if (id == 7) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Titanium.png" };
  if (id == 8) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Mercury.png" };
  if (id == 9) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Plate.png" };
  if (id == 10) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Plate.png" };
  if (id == 11) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Copper_Plate.png" };
  if (id == 12) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Glass_Plate.png" };
  if (id == 13) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Rod.png" };
  if (id == 14) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Rod.png" };
  if (id == 15) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Copper_Rod.png" };
  if (id == 16) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Wire.png" };
  if (id == 17) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Copper_Wire.png" };
  if (id == 18) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Spring.png" };
  if (id == 19) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Glass.png" };
  if (id == 20) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Glass_Tube.png" };
  if (id == 21) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Glass_Sphere.png" };
  if (id == 22) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Glass_Bottle.png" };
  if (id == 23) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Bolt.png" };
  if (id == 24) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Gear.png" };
  if (id == 25) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Chain.png" };
  if (id == 26) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Pipe.png" };
  if (id == 27) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Barrel.png" };
  if (id == 28) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gearbox.png" };
  if (id == 29) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gas Tank.png" };
  if (id == 30) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Ammunition.png" };
  if (id == 31) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Steel_Ammunition.png" }; 
  if (id == 32) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Iron_Powder.png" };
  if (id == 33) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Carbon_Powder.png" };
  if (id == 34) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Sulfur_Powder.png" };
  if (id == 35) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Titanium_Powder.png" };
  if (id == 36) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Mercury_Powder.png" };
  if (id == 37) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gunpowder.png" };
  if (id == 38) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Rocket.png" };
  if (id == 39) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Circuit.png" };
  if (id == 40) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Hydrogen.png" };
  if (id == 41) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Oxygen.png" };
  if (id == 42) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Nitrogen.png" };
  if (id == 43) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Water.png" };
  if (id == 44) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Algae.png" };
  if (id == 45) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Crude_Oil.png" };
  if (id == 46) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Heavy_Oil.png" };
  if (id == 47) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Light_Oil.png" };
  if (id == 48) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Sulfuric_Acid.png" };
  if (id == 49) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Plastic.png" };
  if (id == 50) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Plastic_Plate.png" };
  if (id == 51) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Barrel_Water.png" };
  if (id == 52) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Barrel_Crude_Oil.png" };
  if (id == 53) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Barrel_Light_Oil.png" };
  if (id == 54) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Barrel_Heavy_Oil.png" };
  if (id == 55) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gas_Tank_Hydrogen.png" };
  if (id == 56) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gas_Tank_Oxygen.png" };
  if (id == 57) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Gas_Tank_Nitrogen.png" };
  if (id == 58) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Bottle_Water.png" };
  if (id == 59) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Bottle_Sulfuric_Acid.png" };
  if (id == 60) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Inks.png" };
  if ((60 < id)  && (id< 100)) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Inks.png" };
  if (100 <= id) { return "https://raw.githubusercontent.com/saprolord/Sandship/main/image/Ink_Fluid.png" };


}

function zero(material) {
  'Set an array to have all value as zero'
  for (var i = 0; i < (material.length); i++) {
    material[i] = 0;
  }
}

function calculate(material, rate, divParentId, boxId) {
  var divParent = document.getElementById(divParentId);
  var matChildren = document.createElement('div');
  var treeLevel = document.createElement('div');
  var branchBox = document.createElement('div');
  var matBox = document.createElement('div');
  var tempParentId = 0

  if (material.recipe == 0) {
    //raw material with no recipe 
    createMatDetail(material.name, rate, factoryname(material.factory[0]), Math.ceil(rate / material.factory[1]), divParentId, 'matDet' + boxId, material.ID)
    //add the material to the total required
    materialtotal[material.ID] = materialtotal[material.ID] + rate;
  } else {
    //create a Material box with the material detail
    createMatBox(material.name, rate, factoryname(material.factory[0]), Math.ceil(rate / material.factory[1]), divParentId, 'matBox' + boxId, material.ID)
    //add the material to the total required
    materialtotal[material.ID] = materialtotal[material.ID] + rate;
    //store the current Id and create a MatChildren box to contain the material(s) required in the recipe
    createMatChildren(divParentId, 'child' + boxId);
    tempParentId = boxId;
    boxId = boxId + 10000;
    if (material.recipe.length == 1) {
      // there is only one material required
      boxId = boxId + 1
      createTreeLevel('child' + tempParentId, 'tree' + boxId);
      createBranchStraight('tree' + boxId);
      boxId = calculate(material.recipe[0], material.quantity[0] * rate, 'tree' + boxId, boxId);
    } else {
      // there is more than one material required
      for (var i = 0; i < material.recipe.length; i++) {
        boxId = boxId + 1
        createTreeLevel('child' + tempParentId, 'tree' + boxId);
        if (i == 0) {
          //it is the first item in the recipe - create a branch going down'
          createBranchDown('tree' + boxId);
        } else {
          if (i < material.recipe.length - 1) {
            //it is neither the first or last item in the recipe - create a fork')              
            createBranchFork('tree' + boxId);
          } else {
            //it is the last item in the recipe - create a branch end
            createBranchEnd('tree' + boxId);
          }
        }
        boxId = calculate(material.recipe[i], material.quantity[i] * rate, 'tree' + boxId, boxId);
      }
    }
    boxId = boxId - 10000;
  }
  return boxId;
}

function createTreeLevel(divParentId, boxId) {
  //create a TreeLevel div with the id 'boxId' and append it to divParentId
  var treeLevel = document.createElement('div');
  var divParent = document.getElementById(divParentId);
  treeLevel.setAttribute('class', 'treeLevel');
  treeLevel.id = boxId;
  divParent.appendChild(treeLevel);
}

function factoryname(id) {
  'Retrun the string of the name of the factory associated with the index "id" '
 'FactoryIDs: SubGenerator=0, Synthesizer=1, Heater=2, Press=3, Cutter=4'
  'Extruder=5, Shaper=6, Mixer (Metal)=7, MechAss=8, Applier=9, Blower=10, Open Pipe=11'
  'ElecAss=12, Crusher=13, Grower=14, Compressor=15, Chemical Plant=16, Chemical Mixer=17'
  if (id == 0) { return "Substance Generator" };
  if (id == 1) { return "Synthesizer" };
  if (id == 2) { return "Heater" };
  if (id == 3) { return "Press" };
  if (id == 4) { return "Cutter" };
  if (id == 5) { return "Extruder" };
  if (id == 6) { return "Shaper" };
  if (id == 7) { return "Mixer" };
  if (id == 8) { return "Mechanical Assembler" };
  if (id == 9) { return "Applier" };
  if (id == 10) { return "Blower" };
  if (id == 11) { return "Open Pipe" };
  if (id == 12) { return "Electrical Assembler" };
  if (id == 13) { return "Crusher" };
  if (id == 14) { return "Grower" };
  if (id == 15) { return "Compressor" };
  if (id == 16) { return "Chemical Plant" };
  if (id == 17) { return "Chemical Mixer" };
}

function erase(divId) {
  // Clear the div space (divId space as input)
  document.getElementById(divId).innerHTML = "";
}

function materialOutput() {

  var total = "";
  var matId = "";

  for (var i = 0; i < materialtotal.length; i++) {
    total = materialtotal[i];
    if (i < 10) {
      matId = ("mat0" + i);
      document.getElementById(matId).innerHTML = Math.round(total * 1000) / 1000;
      if (document.getElementById(matId).innerHTML == 0) {
        document.getElementById("matDiv0" + i).style.display = "none";
      } else {
        document.getElementById("matDiv0" + i).style.display = "flex";
      }
    } else {
      matId = ("mat" + i);
      
      document.getElementById(matId).innerHTML = Math.round(total * 1000) / 1000;
      if (document.getElementById(matId).innerHTML == 0) {
        document.getElementById("matDiv" + i).style.display = "none";
      } else {
        document.getElementById("matDiv" + i).style.display = "flex";
      }
    }
  }
}

class MatDef {
  'MatDef class is the definition of the material recipes as:'
  'name: name of the material as string'
  'factory: [factory name required, maximum rate of production]'
  'recipe: [list of material required]'
  'quantity: [list of quantity required for each material in the order defined in [recipe]]'
  constructor(nameStr, factoryArr, recipeArr, quantityArr, matId) {
    this.name = nameStr;
    this.factory = factoryArr;
    this.recipe = recipeArr;
    this.quantity = quantityArr;
    this.ID = matId;
  }
}

function createBranchStraight(divParentId) {
  //create a simple horizontal branch "-"
  //appends to divParentId
  var branchBox = document.createElement('div');
  var branchSimple = document.createElement('div');
  var parentDiv = document.getElementById(divParentId);

  branchBox.setAttribute('class', 'branchBox');
  branchSimple.setAttribute('class', 'branchSimple');

  branchBox.appendChild(branchSimple);
  parentDiv.appendChild(branchBox);

}

function createBranchDown(divParentId) {
  //create a straight down "¦" branch to be continued downward
  //appends to divParentId
  var branchBox = document.createElement('div');
  var branchSimple = document.createElement('div');
  var branchDown = document.createElement('div');
  var parentDiv = document.getElementById(divParentId);

  branchBox.setAttribute('class', 'branchBox');
  branchSimple.setAttribute('class', 'branchSimple');
  branchDown.setAttribute('class', 'branchDown');

  branchBox.appendChild(branchSimple);
  branchBox.appendChild(branchDown);
  parentDiv.appendChild(branchBox);
}

function createBranchEnd(divParentId) {
  //create a "L" end of branch
  //appends to divParentId
  var branchBox = document.createElement('div');
  var branchEnd = document.createElement('div');
  var parentDiv = document.getElementById(divParentId);

  branchBox.setAttribute('class', 'branchBox');
  branchEnd.setAttribute('class', 'branchEnd');

  branchBox.appendChild(branchEnd);
  parentDiv.appendChild(branchBox);
}

function createBranchFork(divParentId) {
  //create a fork in the branch
  //appends to divParentId
  var branchBox = document.createElement('div');
  var branchEnd = document.createElement('div');
  var branchDown = document.createElement('div');
  var parentDiv = document.getElementById(divParentId);

  branchBox.setAttribute('class', 'branchBox');
  branchEnd.setAttribute('class', 'branchEnd');
  branchDown.setAttribute('class', 'branchDown');

  branchBox.appendChild(branchEnd);
  branchBox.appendChild(branchDown);
  parentDiv.appendChild(branchBox);
}

function createMatBox(material, rate, factory, qty, divParentId, boxId, matId) {
  //create a material box, consisting of a material detail box (material, rate, factory, qty)
  //and a "-" sign 
  //appends to divParentId (meant to go in a TreeLevel div)
  var matBox = document.createElement('div');
  var sign = document.createElement('div');
  var parentDiv = document.getElementById(divParentId);
  var tempId = "";

  matBox.setAttribute('class', 'matBox');
  matBox.id = boxId;
  sign.innerHTML = '<img src="https://raw.githubusercontent.com/saprolord/saprolord.github.io/main/image/Minus_Sign.png" style="width:15px;height:15px;" alt="-">'
  sign.setAttribute('class', 'plusMinus');

  parentDiv.appendChild(matBox);
  createMatDetail(material, rate, factory, qty, matBox.id, boxId, matId);
  matBox.appendChild(sign);
  tempId = divParentId.substring(4);
  matBox.setAttribute("onClick", "collapse(" + tempId + ")");

}

function createMatDetail(material, rate, factory, qty, divParentId, boxId, matId) {
  //create a material detail box with its picture (matId), material name, 
  //calculated rate,factory required and qty of factories required
  //appends to divParentId (meant to go in a matBox div)
  var matDetail = document.createElement('div');
  var matName = document.createElement('div');
  var matRate = document.createElement('div');
  var factoryName = document.createElement('div');
  var factoryNum = document.createElement('div');
  var spacer = document.createElement('div');
  var icon = document.createElement('img');
  var parentDiv = document.getElementById(divParentId);

  matDetail.id = boxId
  matDetail.setAttribute('class', 'matDetail');

  icon.setAttribute('class', 'ico');
  icon.src = findIcon(matId);
  icon.setAttribute('width', '20px');
  icon.setAttribute('height', '20px');
  icon.setAttribute('alt', 'iron');

  matName.setAttribute('class', 'matName');
  matName.innerHTML = material;
  matName.prepend(icon);
  matRate.setAttribute('class', 'matRate');
  matRate.innerHTML = Math.round(rate * 100) / 100;
  factoryName.setAttribute('class', 'factoryName');
  factoryName.innerHTML = factory;
  factoryNum.setAttribute('class', 'factoryNum');
  factoryNum.innerHTML = qty;
  spacer.setAttribute('class', 'spacer');

  matDetail.appendChild(matName);
  matDetail.appendChild(matRate);
  matDetail.appendChild(factoryName);
  matDetail.appendChild(factoryNum);
  matDetail.appendChild(spacer);

  parentDiv.appendChild(matDetail);
}

function createMatChildren(divParentId, boxId) {
  //create a matChildren div with the id 'boxId' and append it to divParentId
  var matChildren = document.createElement('div');
  var divParent = document.getElementById(divParentId);
  matChildren.setAttribute('class', 'matChildren');
  matChildren.id = boxId;
  divParent.appendChild(matChildren);
}

function collapse(childId) {

  //hide the div chilID if visible, unhide it if hidden.
  if (document.getElementById('child' + childId).style.display == 'none') { showChild(childId) }
  else { hideChild(childId) }
}

function collapseRank(rank) {
  const allChild = document.getElementsByClassName('matChildren');
  var size = allChild.length;
  var tempStr = "";
  for (i = 0; i < size; i++) {
    tempStr = allChild[i].id;
    if ((tempStr.substring(5, 6)) > rank) {
      hideChild(allChild[i].id.substring(5));
    } else {
      showChild(allChild[i].id.substring(5));
    }
  }
}

function hideChild(childId) {
  var sign = document.createElement('div');
  sign.setAttribute('class', 'plusMinus');
  document.getElementById('child' + childId).style.display = 'none'
  document.getElementById('matBox' + childId).lastElementChild.innerHTML = innerHTML = '<img src="https://raw.githubusercontent.com/saprolord/saprolord.github.io/main/image/Plus_Sign.png" style="width:15px;height:15px;" alt="-">';
}

function showChild(childId) {
  var sign = document.createElement('div');
  sign.setAttribute('class', 'plusMinus');
  document.getElementById('child' + childId).style.display = 'flex'
  document.getElementById('matBox' + childId).lastElementChild.innerHTML = innerHTML = '<img src="https://raw.githubusercontent.com/saprolord/saprolord.github.io/main/image/Minus_Sign.png" style="width:15px;height:15px;" alt="-">';
}

function createTierButton() {
  var buttonBox = document.getElementById("buttonBox");
  const allChild = document.getElementsByClassName('matChildren');
  var size = allChild.length;
  var tempStr = "";
  var rank = 0

  erase("buttonBox");
  for (i = 0; i < size; i++) {
    tempStr = allChild[i].id;
    if ((tempStr.substring(5, 6)) > rank) { rank = allChild[i].id.substring(5, 6) };
  }
  if (i > 1) {
    for (i = 1; i <= rank; i++) {
      tempDiv = document.createElement('Div');
      tempDiv.id = "rank" + i;
      if (i == 1) { tempDiv.setAttribute("class", "buttonStart") }
      else {
        if (i == rank) { tempDiv.setAttribute("class", "buttonEnd") }
        else { tempDiv.setAttribute("class", "buttonMid") }
      }
      tempDiv.innerHTML = i;
      tempDiv.setAttribute("onclick", "collapseRank(" + i + ")")
      buttonBox.appendChild(tempDiv);
    }
    buttonBox.style.display = "flex";
  }
}

function maxFactory() {
  document.getElementById("extractor").selectedIndex = "4";
  document.getElementById("workshop").selectedIndex = "3";
  document.getElementById("furnace").selectedIndex = "3";
  document.getElementById("machine").selectedIndex = "3";
  document.getElementById("industrial").selectedIndex = "3";
  document.getElementById("forge").selectedIndex = "3";
  document.getElementById("manufacturer").selectedIndex = "3";
}



function createMatOutputBox(i){
  var parentDiv = document.getElementById("subBox3");
  var matDiv = document.createElement('div');
  var icon = document.createElement('img');
  var matqty = document.createElement('div');

  if (i<10){
    matDiv.id = "matDiv0" + i;
    matqty.id = "mat0" + i;
  }else{
    matDiv.id = "matDiv" + i;
    matqty.id = "mat" + i;
  }

    matDiv.setAttribute("class","matsum");
    matDiv.style.display="flex";

    icon.setAttribute("class","ico");
    icon.src = findIcon(i);
    icon.setAttribute("max-width", "30px");
    icon.setAttribute("height", "auto");
    icon.setAttribute("float", "left");
    icon.setAttribute("alt", materialdata.name);
    
    matqty.setAttribute("class","ico");
    matqty.innerHTML=0;

    matDiv.appendChild(icon);
    matDiv.appendChild(matqty);
    parentDiv.appendChild(matDiv);


}
