#include<iostream>
using namespace std;
bool isPalindrom(int x){
    if(x<0){
        return false;
    }else{
        int remainder,temp=x;
        long long int reversed_number=0;
        while(x>0){
            remainder = x % 10;
            reversed_number = reversed_number * 10 + remainder;
            x /= 10;
        }
        //cout<<"reverse : "<<reversed_number<<" input : "<<x<<endl;
        if(reversed_number==temp) return true;
        else return false;
    }
}
int main(){
    int number;
    cout<<"Enter number : ";
    cin>>number;
    cout<<isPalindrom(number);
    return 0;
}
