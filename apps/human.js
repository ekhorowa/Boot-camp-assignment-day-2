function Human (name, gender, height, skin_color){
  this.name = name;
  this.gender = gender;
  this.height = height;
  this.skin_color = skin_color;
}

Human.prototype.getage = function(yob) {
  return (new Date().getFullYear() - yob);
};