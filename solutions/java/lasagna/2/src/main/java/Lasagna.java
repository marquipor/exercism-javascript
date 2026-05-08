public class Lasagna {
    private static final int EXPECTED_MINUTES_IN_OVEN = 40;
    private static final int PREPARATION_TIME_PER_LAYER = 2;
    
    public int expectedMinutesInOven(){
        return EXPECTED_MINUTES_IN_OVEN;
    }
    
    public int remainingMinutesInOven(int minInOven){
        return  expectedMinutesInOven() - minInOven;
    }
    
    public int preparationTimeInMinutes(int layersQuantity){
        return layersQuantity * PREPARATION_TIME_PER_LAYER;
        
    }
    
    public int totalTimeInMinutes(int layerQuantity, int minInOven){
        return preparationTimeInMinutes(layerQuantity) + minInOven;
    }
}
