//
// This is only a SKELETON file for the 'Grade School' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GradeSchool {
  students = {};
  
  roster() {
    return Object.values(this.students).flat();
  }

  add(student, grade) {
    
    const alreadyExists = Object.values(this.students).some(students =>
      students.includes(student));
    if (alreadyExists) return false;
  
    
    if (!this.students[grade]) {
      this.students[grade] = [];
    }
  
    this.students[grade].push(student);
    this.students[grade].sort();
    return true;
  }

  grade(n) {
    if (this.students[n]) {
      return this.students[n];
    } else {
      return [];
    }
  }
}
