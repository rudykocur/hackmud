function(context, args)
{
	var caller = context.caller;
	var std  = #s.scripts.lib();
	var comb = {asd:'zxc'};
	
	std.log("C-C-C-C-Combo!");
	std.log(comb);                //Log final version of comb (version that fully cracked the target)
	std.log("Lorem ipsum dolor sit amet");
	return {ok:true,msg:std.get_log()}; //Return ok and logs
	//return { ok:false };
}
