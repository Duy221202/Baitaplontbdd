#include <stdio.h>
     int n=3,y,giatrix0,giatrix1,giatrix2;
     int C[3]={0,0,0};
     int x0[3]={3,-1,2};
     int x1[3]={4,2,-5};
     int x2[3]={-2,3,1};
     int ymx;
 void search(int i){
    
    if(i>=n){
       
       y=5*C[0]-3*C[1]+2*C[2] ;
       
       if(y>ymx){
           ymx=y;
           giatrix0=C[0];
           giatrix1=C[1];
           giatrix2=C[2];
       }
    }
    else{
        for(int j =0; j<3; j++){
            if(i==0){
           C[i]=x0[j];
           search(i+1);
           C[i]=0;
        }
            if(i==1){
           C[i]=x1[j];
           search(i+1);
           C[i]=0;
        }
            if(i==2){
           C[i]=x2[j];
           search(i+1);
           C[i]=0;
        }
    }}}
int main(){
     ymx = 5*x0[0]-3*x1[0]+2*x2[0];
    search(0);
    printf("ymax= %d\n",ymx); 
    printf("x0= %d\n",giatrix0);
    printf("x1= %d\n",giatrix1);
    printf("x2= %d",giatrix2);
}