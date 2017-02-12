function(context, args)
{
	var std  = #s.scripts.lib();
	var t = args.target;
	var resp = t.call({});
	//if(resp.indexOf("EZ_35")<0) {return {ok:false, msg:"Not a EZ_35 lock"}};
	
	['open','unlock','release'].forEach(word => {
		resp=t.call({ez_35:word});
		if(resp.indexOf('digit') >= 0) {
			for(let i=0;i<10;i++) {
				resp=t.call({ez_35:word, digit:i});
				std.log({ez_35:word, digit:i});
				if(resp.indexOf('LOCK_UNLOCKED ez_35') >= 0) {
					std.log(resp);
					return {ok:true,msg:std.get_log()};
				}
				else {
					std.log(resp);
				}
			}
		}
		else {
			std.log(resp);
		}
	});
		
	return { ok:false,msg:std.get_log() };
}
