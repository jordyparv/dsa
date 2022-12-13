#include <iostream>
#include<math.h>
using namespace std;
int main(){
    int n = 4;
    int m=n*2;

    for(int i=1;i<m;i++){
        
        for(int j=1;j<m;j++){
        int k = n - min(min(j,m-j),min(i,m-i))+1; 
         cout<<k;
        }
        cout<<endl;
    }
    
    
    
        
        
 
    

return 0;
}