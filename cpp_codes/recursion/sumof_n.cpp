#include<iostream>
using namespace std;
long long sumofs(long long n){
    return n*(n+1)/2;
}
int main(){
    int n=6;   
    int tmp = n;
    
    int sum =sumofs(n);
    cout<<"Sum of first N Natural : "<<sum<<endl;
}