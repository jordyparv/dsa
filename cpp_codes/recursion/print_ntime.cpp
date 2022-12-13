#include<iostream>
using namespace std;
void print(int n,int m=1)
{
    
    if(m<=n)
    {
        cout<<m++<<" ";
        print(n,m);
    }
    
    
}
int main(){
    print(5);
}
