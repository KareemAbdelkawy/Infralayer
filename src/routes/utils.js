export const getPinLocation = () => {
	const pinLocationKey = 'pinLocation';
	let lat, lng;
	let pinLocationStr = localStorage.getItem(pinLocationKey);
	if (pinLocationStr) {
		let pinLocation = JSON.parse(pinLocationStr);
		if (pinLocation) {
			lat = pinLocation.lat;
			lng = pinLocation.lng;
		}
	}
	return [lat ?? -34.397, lng ?? 150.644];
};

export const debounce = (func, timeout = 300) => {
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}