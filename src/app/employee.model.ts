export class Employee {
    public id?: number;
    public firstName: string;
    public middleName: string;
    public lastName: string;
    public userName: string;
    public password: string;
    public dateOfBirth?: Date;
    public dateOfJoining?: Date;
    public mobileNumber: string;
    public email: string;
    public address: string;

    constructor(firstName: string, middleName: string, lastName: string, userName: string,
        password: string, dateOfBirth: Date, dateOfJoining: Date, mobileNumber: string,
        email: string, address: string, id?: number) {
        this.firstName = firstName;
        this.middleName = middleName;
        this.address = address;
        this.dateOfBirth = dateOfBirth;
        this.dateOfJoining = dateOfJoining;
        this.email = email;
        this.lastName = lastName;
        this.mobileNumber = mobileNumber;
        this.password = password;
        this.userName = userName;
        this.id = id;
    }
}
