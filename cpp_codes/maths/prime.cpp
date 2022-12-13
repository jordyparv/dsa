#include <bits/stdc++.h>
using namespace std;
int main(){
    int n = 9;
    int count = 0;

    for(int i=2;i<=n/2;i++){
        if(n%i==0){
            count++;
            break;
        }
    }
    if(count==0)
    cout<<n<<" is Prime"<<endl;
    else
    cout<<n<<" is not Prime"<<endl; 
    cout<<count;
}