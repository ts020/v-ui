/**
 * Created by ts on 2016/01/25.
 */
export default class ArrayUtil {
	static without(array, item){
		if(item == null || array == null || array.indexOf(item) == -1) {
			return;
		}
		array.splice(array.indexOf(item), 1);
	}
}