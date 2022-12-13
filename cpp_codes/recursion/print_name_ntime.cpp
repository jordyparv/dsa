#include<iostream>
using namespace std;
void printGfg(int N) {
        // Code here
        if(N>0){
            cout<<"GFG"<<" ";
            printGfg(N-1);
        }
    }
int main(){
printGfg(5);
}