function(context, args)
{
	var l  = #s.scripts.lib(),
		o,lock,
		pp=args.params||{},
		s = args.script;
	
	o = #s.scripts.get_level({name:s.name});
	if(o=="4") {
		o = s.call(pp);
		o = o.split('\n');
		o = o[o.length-1];
		
		if(/EZ_\d+/.test(o)) {
			lock = o.substr(o.indexOf('EZ_'), 5);
		}
		if(/c00\d/.test(o)) {
			lock = o.substr(o.indexOf('c00'), 4);
		}
		
		if(lock) {
			return {ok:true, lock: lock, loc:s.name}
		}
		
		return {ok:false, msg: o}
	}
			
	return { ok:false,msg:l.get_log() };
}
