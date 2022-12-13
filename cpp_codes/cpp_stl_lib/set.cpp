#include<bits/stdc++.h>
using namespace std;
int main(){
    set<int> st = {2,3,4,2,1};
    // for(auto it = st.begin();it!= st.end();it++){
    //     cout<<*it<<endl;
    // }
    int n=2;
    cout<<st.count(2)<<endl;

    if(st.find(n)!= st.end()){
        cout<<n<<" is found"<<endl;
    }
    st.erase(st.begin());
    for(auto it:st){
        cout<<it<<" ";
    }
    // st.empty()
    //st.clear()
    return 0;
}