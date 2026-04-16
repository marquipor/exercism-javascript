public class Lasagna {
    
    public int expectedMinutesInOven(){
        return 40;
    }
    
    public int remainingMinutesInOven(int minInOven){
        return  expectedMinutesInOven() - minInOven;
    }
    
    public int preparationTimeInMinutes(int layersQuantity){
        return layersQuantity * 2;
        
    }
    
    public int totalTimeInMinutes(int layerQuantity, int minInOven){
        return preparationTimeInMinutes(layerQuantity) + minInOven;
    }
}
