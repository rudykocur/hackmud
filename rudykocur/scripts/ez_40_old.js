function(context, args)
{
	var std  = #s.scripts.lib();
	var t = args.target;
	var resp = t.call({});
	let k = 'ez_40';
	let k2 = 'ez_prime';
	let word = args.word;
	
	var isPrime = (n) => {
		var q = Math.floor(Math.sqrt(n));
		for (var i = 2; i <= q; i++) {if (n % i == 0) return false;};
		return true;
	}
	
	for(let i=2;i<100;i++) {
		if(!isPrime(i)) {continue}
		resp=t.call({[k]:word, [k2]:i});
		std.log({[k]:word, [k2]:i});
		if(resp.indexOf('LOCK_UNLOCKED') >= 0) {
			std.log(resp);
			return {ok:true,msg:std.get_log()};
		}
		else {
			std.log(resp);
		}
	}

		
	return { ok:false,msg:std.get_log() };
}
