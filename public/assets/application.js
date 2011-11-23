<!DOCTYPE html>
<html>
<head>
  <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
  <title>RuntimeError at &#x2F;assets&#x2F;application.js</title>

  <script type="text/javascript">
  //<!--
  function toggle(id) {
    var pre  = document.getElementById("pre-" + id);
    var post = document.getElementById("post-" + id);
    var context = document.getElementById("context-" + id);

    if (pre.style.display == 'block') {
      pre.style.display = 'none';
      post.style.display = 'none';
      context.style.background = "none";
    } else {
      pre.style.display = 'block';
      post.style.display = 'block';
      context.style.background = "#fffed9";
    }
  }

  function toggleBacktrace(){
    var bt = document.getElementById("backtrace");
    var toggler = document.getElementById("expando");

    if (bt.className == 'condensed') {
      bt.className = 'expanded';
      toggler.innerHTML = "(condense)";
    } else {
      bt.className = 'condensed';
      toggler.innerHTML = "(expand)";
    }
  }
  //-->
  </script>

<style type="text/css" media="screen">
  *                   {margin: 0; padding: 0; border: 0; outline: 0;}
  div.clear           {clear: both;}
  body                {background: #EEEEEE; margin: 0; padding: 0;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode',
                       'Garuda';}
  code                {font-family: 'Lucida Console', monospace;
                       font-size: 12px;}
  li                  {height: 18px;}
  ul                  {list-style: none; margin: 0; padding: 0;}
  ol:hover            {cursor: pointer;}
  ol li               {white-space: pre;}
  #explanation        {font-size: 12px; color: #666666;
                       margin: 20px 0 0 100px;}
/* WRAP */
  #wrap               {width: 1000px; background: #FFFFFF; margin: 0 auto;
                       padding: 30px 50px 20px 50px;
                       border-left: 1px solid #DDDDDD;
                       border-right: 1px solid #DDDDDD;}
/* HEADER */
  #header             {margin: 0 auto 25px auto;}
  #header img         {float: left;}
  #header #summary    {float: left; margin: 12px 0 0 20px; width:660px;
                       font-family: 'Lucida Grande', 'Lucida Sans Unicode';}
  h1                  {margin: 0; font-size: 36px; color: #981919;}
  h2                  {margin: 0; font-size: 22px; color: #333333;}
  #header ul          {margin: 0; font-size: 12px; color: #666666;}
  #header ul li strong{color: #444444;}
  #header ul li       {display: inline; padding: 0 10px;}
  #header ul li.first {padding-left: 0;}
  #header ul li.last  {border: 0; padding-right: 0;}
/* BODY */
  #backtrace,
  #get,
  #post,
  #cookies,
  #rack               {width: 980px; margin: 0 auto 10px auto;}
  p#nav               {float: right; font-size: 14px;}
/* BACKTRACE */
  a#expando           {float: left; padding-left: 5px; color: #666666;
                      font-size: 14px; text-decoration: none; cursor: pointer;}
  a#expando:hover     {text-decoration: underline;}
  h3                  {float: left; width: 100px; margin-bottom: 10px;
                       color: #981919; font-size: 14px; font-weight: bold;}
  #nav a              {color: #666666; text-decoration: none; padding: 0 5px;}
  #backtrace li.frame-info {background: #f7f7f7; padding-left: 10px;
                           font-size: 12px; color: #333333;}
  #backtrace ul       {list-style-position: outside; border: 1px solid #E9E9E9;
                       border-bottom: 0;}
  #backtrace ol       {width: 920px; margin-left: 50px;
                       font: 10px 'Lucida Console', monospace; color: #666666;}
  #backtrace ol li    {border: 0; border-left: 1px solid #E9E9E9;
                       padding: 2px 0;}
  #backtrace ol code  {font-size: 10px; color: #555555; padding-left: 5px;}
  #backtrace-ul li    {border-bottom: 1px solid #E9E9E9; height: auto;
                       padding: 3px 0;}
  #backtrace-ul .code {padding: 6px 0 4px 0;}
  #backtrace.condensed .system,
  #backtrace.condensed .framework {display:none;}
/* REQUEST DATA */
  p.no-data           {padding-top: 2px; font-size: 12px; color: #666666;}
  table.req           {width: 980px; text-align: left; font-size: 12px;
                       color: #666666; padding: 0; border-spacing: 0;
                       border: 1px solid #EEEEEE; border-bottom: 0;
                       border-left: 0;
                       clear:both}
  table.req tr th     {padding: 2px 10px; font-weight: bold;
                       background: #F7F7F7; border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
  table.req tr td     {padding: 2px 20px 2px 10px;
                       border-bottom: 1px solid #EEEEEE;
                       border-left: 1px solid #EEEEEE;}
/* HIDE PRE/POST CODE AT START */
  .pre-context,
  .post-context       {display: none;}

  table td.code       {width:750px}
  table td.code div   {width:750px;overflow:hidden}
</style>
</head>
<body>
  <div id="wrap">
    <div id="header">
      <img src="/__sinatra__/500.png" alt="application error" height="161" width="313" />
      <div id="summary">
        <h1><strong>RuntimeError</strong> at <strong>&#x2F;assets&#x2F;application.js
          </strong></h1>
        <h2>JSMin parse error: unterminated regular expression literal: 
</h2>
        <ul>
          <li class="first"><strong>file:</strong> <code>
            jsmin.rb</code></li>
          <li><strong>location:</strong> <code>block in action_get
            </code></li>
          <li class="last"><strong>line:
            </strong> 185</li>
        </ul>
      </div>
      <div class="clear"></div>
    </div>

    <div id="backtrace" class='condensed'>
      <h3>BACKTRACE</h3>
      <p><a href="#" id="expando"
            onclick="toggleBacktrace(); return false">(expand)</a></p>
      <p id="nav"><strong>JUMP TO:</strong>
         <a href="#get-info">GET</a>
         <a href="#post-info">POST</a>
         <a href="#cookie-info">COOKIES</a>
         <a href="#env-info">ENV</a>
      </p>
      <div class="clear"></div>

      <ul id="backtrace-ul">

      
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>block in action_get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="178"
                  class="pre-context" id="pre-1"
                  onclick="toggle(1);">
                
                <li class="pre-context-line"><code>          if @a == CHR_FRONTSLASH
</code></li>
                
                <li class="pre-context-line"><code>            break
</code></li>
                
                <li class="pre-context-line"><code>          elsif @a == CHR_BACKSLASH
</code></li>
                
                <li class="pre-context-line"><code>            @output &lt;&lt; @a
</code></li>
                
                <li class="pre-context-line"><code>            @a = get
</code></li>
                
                <li class="pre-context-line"><code>          elsif @a[0] &lt;= ORD_LF
</code></li>
                
                <li class="pre-context-line"><code>            raise &quot;JSMin parse error: unterminated regular expression &quot; +
</code></li>
                
              </ol>
              

              <ol start="185" class="context" id="1"
                  onclick="toggle(1);">
                <li class="context-line" id="context-1"><code>                &quot;literal: #{@a}&quot;</code></li>
              </ol>

              
              <ol start="186" class="post-context"
                  id="post-1" onclick="toggle(1);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          @output &lt;&lt; @a
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        @b = nextchar
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>loop</strong></code>
            </li>

            <li class="code system">
              
              <ol start="168"
                  class="pre-context" id="pre-2"
                  onclick="toggle(2);">
                
                <li class="pre-context-line"><code>    def action_get
</code></li>
                
                <li class="pre-context-line"><code>      @b = nextchar
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if @b == CHR_FRONTSLASH &amp;&amp; (@a == CHR_LF || @a =~ &#x2F;[\(,=:\[!&amp;|?{};]&#x2F;)
</code></li>
                
                <li class="pre-context-line"><code>        @output &lt;&lt; @a
</code></li>
                
                <li class="pre-context-line"><code>        @output &lt;&lt; @b
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="175" class="context" id="2"
                  onclick="toggle(2);">
                <li class="context-line" id="context-2"><code>        loop do</code></li>
              </ol>

              
              <ol start="176" class="post-context"
                  id="post-2" onclick="toggle(2);">
                
                <li class="post-context-line"><code>          @a = get
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          if @a == CHR_FRONTSLASH
</code></li>
                
                <li class="post-context-line"><code>            break
</code></li>
                
                <li class="post-context-line"><code>          elsif @a == CHR_BACKSLASH
</code></li>
                
                <li class="post-context-line"><code>            @output &lt;&lt; @a
</code></li>
                
                <li class="post-context-line"><code>            @a = get
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>action_get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="168"
                  class="pre-context" id="pre-3"
                  onclick="toggle(3);">
                
                <li class="pre-context-line"><code>    def action_get
</code></li>
                
                <li class="pre-context-line"><code>      @b = nextchar
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      if @b == CHR_FRONTSLASH &amp;&amp; (@a == CHR_LF || @a =~ &#x2F;[\(,=:\[!&amp;|?{};]&#x2F;)
</code></li>
                
                <li class="pre-context-line"><code>        @output &lt;&lt; @a
</code></li>
                
                <li class="pre-context-line"><code>        @output &lt;&lt; @b
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="175" class="context" id="3"
                  onclick="toggle(3);">
                <li class="context-line" id="context-3"><code>        loop do</code></li>
              </ol>

              
              <ol start="176" class="post-context"
                  id="post-3" onclick="toggle(3);">
                
                <li class="post-context-line"><code>          @a = get
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          if @a == CHR_FRONTSLASH
</code></li>
                
                <li class="post-context-line"><code>            break
</code></li>
                
                <li class="post-context-line"><code>          elsif @a == CHR_BACKSLASH
</code></li>
                
                <li class="post-context-line"><code>            @output &lt;&lt; @a
</code></li>
                
                <li class="post-context-line"><code>            @a = get
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>action_copy</strong></code>
            </li>

            <li class="code system">
              
              <ol start="157"
                  class="pre-context" id="pre-4"
                  onclick="toggle(4);">
                
                <li class="pre-context-line"><code>            if @a[0] &lt;= ORD_LF
</code></li>
                
                <li class="pre-context-line"><code>              raise &quot;JSMin parse error: unterminated string literal: #{@a}&quot;
</code></li>
                
                <li class="pre-context-line"><code>            end
</code></li>
                
                <li class="pre-context-line"><code>          end
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="164" class="context" id="4"
                  onclick="toggle(4);">
                <li class="context-line" id="context-4"><code>      action_get</code></li>
              </ol>

              
              <ol start="165" class="post-context"
                  id="post-4" onclick="toggle(4);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Corresponds to action(3) in jsmin.c.
</code></li>
                
                <li class="post-context-line"><code>    def action_get
</code></li>
                
                <li class="post-context-line"><code>      @b = nextchar
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if @b == CHR_FRONTSLASH &amp;&amp; (@a == CHR_LF || @a =~ &#x2F;[\(,=:\[!&amp;|?{};]&#x2F;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>action_output</strong></code>
            </li>

            <li class="code system">
              
              <ol start="128"
                  class="pre-context" id="pre-5"
                  onclick="toggle(5);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    private
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Corresponds to action(1) in jsmin.c.
</code></li>
                
                <li class="pre-context-line"><code>    def action_output
</code></li>
                
                <li class="pre-context-line"><code>      @output &lt;&lt; @a
</code></li>
                
              </ol>
              

              <ol start="135" class="context" id="5"
                  onclick="toggle(5);">
                <li class="context-line" id="context-5"><code>      action_copy</code></li>
              </ol>

              
              <ol start="136" class="post-context"
                  id="post-5" onclick="toggle(5);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Corresponds to action(2) in jsmin.c.
</code></li>
                
                <li class="post-context-line"><code>    def action_copy
</code></li>
                
                <li class="post-context-line"><code>      @a = @b
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if @a == CHR_APOS || @a == CHR_QUOTE
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;jsmin-1.0.1&#x2F;lib&#x2F;jsmin.rb</code> in
                <code><strong>minify</strong></code>
            </li>

            <li class="code system">
              
              <ol start="115"
                  class="pre-context" id="pre-6"
                  onclick="toggle(6);">
                
                <li class="pre-context-line"><code>              if alphanum?(@a)
</code></li>
                
                <li class="pre-context-line"><code>                action_output
</code></li>
                
                <li class="pre-context-line"><code>              else
</code></li>
                
                <li class="pre-context-line"><code>                action_get
</code></li>
                
                <li class="pre-context-line"><code>              end
</code></li>
                
                <li class="pre-context-line"><code>            end
</code></li>
                
                <li class="pre-context-line"><code>          else
</code></li>
                
              </ol>
              

              <ol start="122" class="context" id="6"
                  onclick="toggle(6);">
                <li class="context-line" id="context-6"><code>            action_output</code></li>
              </ol>

              
              <ol start="123" class="post-context"
                  id="post-6" onclick="toggle(6);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @output
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;compressor.rb</code> in
                <code><strong>jsmin</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="31"
                  class="pre-context" id="pre-7"
                  onclick="toggle(7);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      # =====================================================================
</code></li>
                
                <li class="pre-context-line"><code>      # Compressors
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def jsmin(str, options={})
</code></li>
                
                <li class="pre-context-line"><code>        require &#x27;jsmin&#x27;
</code></li>
                
              </ol>
              

              <ol start="38" class="context" id="7"
                  onclick="toggle(7);">
                <li class="context-line" id="context-7"><code>        JSMin.minify str</code></li>
              </ol>

              
              <ol start="39" class="post-context"
                  id="post-7" onclick="toggle(7);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def sass(str, options={})
</code></li>
                
                <li class="post-context-line"><code>        Tilt.new(&quot;scss&quot;, {:style =&gt; :compressed}) { str }.render
</code></li>
                
                <li class="post-context-line"><code>      rescue LoadError
</code></li>
                
                <li class="post-context-line"><code>        simple_css str
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;compressor.rb</code> in
                <code><strong>[]</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="11"
                  class="pre-context" id="pre-8"
                  onclick="toggle(8);">
                
                <li class="pre-context-line"><code>        engine ||= &#x27;jsmin&#x27;   if type == :js
</code></li>
                
                <li class="pre-context-line"><code>        engine ||= &#x27;simple&#x27;  if type == :css
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        key  = :&quot;#{type}&#x2F;#{engine}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        meth = compressors[key]
</code></li>
                
                <li class="pre-context-line"><code>        return str  unless meth
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="18" class="context" id="8"
                  onclick="toggle(8);">
                <li class="context-line" id="context-8"><code>        meth[str, options]</code></li>
              </ol>

              
              <ol start="19" class="post-context"
                  id="post-8" onclick="toggle(8);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compressors
</code></li>
                
                <li class="post-context-line"><code>        @compressors ||= {
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;jsmin&#x27;    =&gt; method(:jsmin),
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;yui&#x27;      =&gt; method(:yui_js),
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;closure&#x27;  =&gt; method(:closure_js),
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;compressor.rb</code> in
                <code><strong>compress</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="11"
                  class="pre-context" id="pre-9"
                  onclick="toggle(9);">
                
                <li class="pre-context-line"><code>        engine ||= &#x27;jsmin&#x27;   if type == :js
</code></li>
                
                <li class="pre-context-line"><code>        engine ||= &#x27;simple&#x27;  if type == :css
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        key  = :&quot;#{type}&#x2F;#{engine}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        meth = compressors[key]
</code></li>
                
                <li class="pre-context-line"><code>        return str  unless meth
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="18" class="context" id="9"
                  onclick="toggle(9);">
                <li class="context-line" id="context-9"><code>        meth[str, options]</code></li>
              </ol>

              
              <ol start="19" class="post-context"
                  id="post-9" onclick="toggle(9);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compressors
</code></li>
                
                <li class="post-context-line"><code>        @compressors ||= {
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;jsmin&#x27;    =&gt; method(:jsmin),
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;yui&#x27;      =&gt; method(:yui_js),
</code></li>
                
                <li class="post-context-line"><code>          :&#x27;js&#x2F;closure&#x27;  =&gt; method(:closure_js),
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;package.rb</code> in
                <code><strong>minify</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="74"
                  class="pre-context" id="pre-10"
                  onclick="toggle(10);">
                
                <li class="pre-context-line"><code>        link_tag production_path, options
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def minify
</code></li>
                
                <li class="pre-context-line"><code>        engine  = @assets.send(:&quot;#{@type}_compression&quot;)
</code></li>
                
                <li class="pre-context-line"><code>        options = @assets.send(:&quot;#{@type}_compression_options&quot;)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="81" class="context" id="10"
                  onclick="toggle(10);">
                <li class="context-line" id="context-10"><code>        Compressor.compress combined, @type, engine, options</code></li>
              </ol>

              
              <ol start="82" class="post-context"
                  id="post-10" onclick="toggle(10);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # The cache hash.
</code></li>
                
                <li class="post-context-line"><code>      def hash
</code></li>
                
                <li class="post-context-line"><code>        if @assets.app.development?
</code></li>
                
                <li class="post-context-line"><code>          &quot;#{name}.#{type}&#x2F;#{mtime}&quot;
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;class_methods.rb</code> in
                <code><strong>block (2 levels) in add_compressed_routes!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="18"
                  class="pre-context" id="pre-11"
                  onclick="toggle(11);">
                
                <li class="pre-context-line"><code>      # Add routes for the compressed versions
</code></li>
                
                <li class="pre-context-line"><code>      def add_compressed_routes!
</code></li>
                
                <li class="pre-context-line"><code>        assets.packages.each do |name, package|
</code></li>
                
                <li class="pre-context-line"><code>          get package.route_regex do
</code></li>
                
                <li class="pre-context-line"><code>            content_type package.type
</code></li>
                
                <li class="pre-context-line"><code>            last_modified package.mtime  if package.mtime
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="25" class="context" id="11"
                  onclick="toggle(11);">
                <li class="context-line" id="context-11"><code>            settings.assets.cache[package.hash] ||= package.minify</code></li>
              </ol>

              
              <ol start="26" class="post-context"
                  id="post-11" onclick="toggle(11);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Add the routes for the individual files.
</code></li>
                
                <li class="post-context-line"><code>      def add_individual_routes!
</code></li>
                
                <li class="post-context-line"><code>        assets.served.each do |path, from|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1145"
                  class="pre-context" id="pre-12"
                  onclick="toggle(12);">
                
                <li class="pre-context-line"><code>        unbound_method          = instance_method method_name
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile(path)
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>        remove_method method_name
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        [ block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>            proc { unbound_method.bind(self).call(*@block_params) } :
</code></li>
                
              </ol>
              

              <ol start="1152" class="context" id="12"
                  onclick="toggle(12);">
                <li class="context-line" id="context-12"><code>            proc { unbound_method.bind(self).call },</code></li>
              </ol>

              
              <ol start="1153" class="post-context"
                  id="post-12" onclick="toggle(12);">
                
                <li class="post-context-line"><code>          pattern, keys, conditions ]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        keys = []
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
                <li class="post-context-line"><code>          special_chars = %w{. + ( ) $}
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in compile!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1145"
                  class="pre-context" id="pre-13"
                  onclick="toggle(13);">
                
                <li class="pre-context-line"><code>        unbound_method          = instance_method method_name
</code></li>
                
                <li class="pre-context-line"><code>        pattern, keys           = compile(path)
</code></li>
                
                <li class="pre-context-line"><code>        conditions, @conditions = @conditions, []
</code></li>
                
                <li class="pre-context-line"><code>        remove_method method_name
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        [ block.arity != 0 ?
</code></li>
                
                <li class="pre-context-line"><code>            proc { unbound_method.bind(self).call(*@block_params) } :
</code></li>
                
              </ol>
              

              <ol start="1152" class="context" id="13"
                  onclick="toggle(13);">
                <li class="context-line" id="context-13"><code>            proc { unbound_method.bind(self).call },</code></li>
              </ol>

              
              <ol start="1153" class="post-context"
                  id="post-13" onclick="toggle(13);">
                
                <li class="post-context-line"><code>          pattern, keys, conditions ]
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def compile(path)
</code></li>
                
                <li class="post-context-line"><code>        keys = []
</code></li>
                
                <li class="post-context-line"><code>        if path.respond_to? :to_str
</code></li>
                
                <li class="post-context-line"><code>          special_chars = %w{. + ( ) $}
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>instance_eval</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="717"
                  class="pre-context" id="pre-14"
                  onclick="toggle(14);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      route_eval(&amp;pass_block) if pass_block
</code></li>
                
                <li class="pre-context-line"><code>      route_missing
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run a route block and throw :halt with the result.
</code></li>
                
                <li class="pre-context-line"><code>    def route_eval(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="724" class="context" id="14"
                  onclick="toggle(14);">
                <li class="context-line" id="context-14"><code>      throw :halt, instance_eval(&amp;block)</code></li>
              </ol>

              
              <ol start="725" class="post-context"
                  id="post-14" onclick="toggle(14);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # If the current request matches pattern and conditions, fill params
</code></li>
                
                <li class="post-context-line"><code>    # with keys and call the given block.
</code></li>
                
                <li class="post-context-line"><code>    # Revert params afterwards.
</code></li>
                
                <li class="post-context-line"><code>    #
</code></li>
                
                <li class="post-context-line"><code>    # Returns pass block.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route_eval</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="717"
                  class="pre-context" id="pre-15"
                  onclick="toggle(15);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      route_eval(&amp;pass_block) if pass_block
</code></li>
                
                <li class="pre-context-line"><code>      route_missing
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run a route block and throw :halt with the result.
</code></li>
                
                <li class="pre-context-line"><code>    def route_eval(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="724" class="context" id="15"
                  onclick="toggle(15);">
                <li class="context-line" id="context-15"><code>      throw :halt, instance_eval(&amp;block)</code></li>
              </ol>

              
              <ol start="725" class="post-context"
                  id="post-15" onclick="toggle(15);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # If the current request matches pattern and conditions, fill params
</code></li>
                
                <li class="post-context-line"><code>    # with keys and call the given block.
</code></li>
                
                <li class="post-context-line"><code>    # Revert params afterwards.
</code></li>
                
                <li class="post-context-line"><code>    #
</code></li>
                
                <li class="post-context-line"><code>    # Returns pass block.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block (2 levels) in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="701"
                  class="pre-context" id="pre-16"
                  onclick="toggle(16);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
                <li class="pre-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do
</code></li>
                
              </ol>
              

              <ol start="708" class="context" id="16"
                  onclick="toggle(16);">
                <li class="context-line" id="context-16"><code>            route_eval(&amp;block)</code></li>
              </ol>

              
              <ol start="709" class="post-context"
                  id="post-16" onclick="toggle(16);">
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
                <li class="post-context-line"><code>        return route!(base.superclass, pass_block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="751"
                  class="pre-context" id="pre-17"
                  onclick="toggle(17);">
                
                <li class="pre-context-line"><code>            {}
</code></li>
                
                <li class="pre-context-line"><code>          end
</code></li>
                
                <li class="pre-context-line"><code>        @params = @original_params.merge(params)
</code></li>
                
                <li class="pre-context-line"><code>        @block_params = values
</code></li>
                
                <li class="pre-context-line"><code>        catch(:pass) do
</code></li>
                
                <li class="pre-context-line"><code>          conditions.each { |cond|
</code></li>
                
                <li class="pre-context-line"><code>            throw :pass if instance_eval(&amp;cond) == false }
</code></li>
                
              </ol>
              

              <ol start="758" class="context" id="17"
                  onclick="toggle(17);">
                <li class="context-line" id="context-17"><code>          yield</code></li>
              </ol>

              
              <ol start="759" class="post-context"
                  id="post-17" onclick="toggle(17);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = @original_params
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # No matching route was found or all routes passed. The default
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="748"
                  class="pre-context" id="pre-18"
                  onclick="toggle(18);">
                
                <li class="pre-context-line"><code>          elsif values.any?
</code></li>
                
                <li class="pre-context-line"><code>            {&#x27;captures&#x27; =&gt; values}
</code></li>
                
                <li class="pre-context-line"><code>          else
</code></li>
                
                <li class="pre-context-line"><code>            {}
</code></li>
                
                <li class="pre-context-line"><code>          end
</code></li>
                
                <li class="pre-context-line"><code>        @params = @original_params.merge(params)
</code></li>
                
                <li class="pre-context-line"><code>        @block_params = values
</code></li>
                
              </ol>
              

              <ol start="755" class="context" id="18"
                  onclick="toggle(18);">
                <li class="context-line" id="context-18"><code>        catch(:pass) do</code></li>
              </ol>

              
              <ol start="756" class="post-context"
                  id="post-18" onclick="toggle(18);">
                
                <li class="post-context-line"><code>          conditions.each { |cond|
</code></li>
                
                <li class="post-context-line"><code>            throw :pass if instance_eval(&amp;cond) == false }
</code></li>
                
                <li class="post-context-line"><code>          yield
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = @original_params
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>process_route</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="748"
                  class="pre-context" id="pre-19"
                  onclick="toggle(19);">
                
                <li class="pre-context-line"><code>          elsif values.any?
</code></li>
                
                <li class="pre-context-line"><code>            {&#x27;captures&#x27; =&gt; values}
</code></li>
                
                <li class="pre-context-line"><code>          else
</code></li>
                
                <li class="pre-context-line"><code>            {}
</code></li>
                
                <li class="pre-context-line"><code>          end
</code></li>
                
                <li class="pre-context-line"><code>        @params = @original_params.merge(params)
</code></li>
                
                <li class="pre-context-line"><code>        @block_params = values
</code></li>
                
              </ol>
              

              <ol start="755" class="context" id="19"
                  onclick="toggle(19);">
                <li class="context-line" id="context-19"><code>        catch(:pass) do</code></li>
              </ol>

              
              <ol start="756" class="post-context"
                  id="post-19" onclick="toggle(19);">
                
                <li class="post-context-line"><code>          conditions.each { |cond|
</code></li>
                
                <li class="post-context-line"><code>            throw :pass if instance_eval(&amp;cond) == false }
</code></li>
                
                <li class="post-context-line"><code>          yield
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      @params = @original_params
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="700"
                  class="pre-context" id="pre-20"
                  onclick="toggle(20);">
                
                <li class="pre-context-line"><code>      base.filters[type].each { |block| instance_eval(&amp;block) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
                <li class="pre-context-line"><code>        routes.each do |pattern, keys, conditions, block|
</code></li>
                
              </ol>
              

              <ol start="707" class="context" id="20"
                  onclick="toggle(20);">
                <li class="context-line" id="context-20"><code>          pass_block = process_route(pattern, keys, conditions) do</code></li>
              </ol>

              
              <ol start="708" class="post-context"
                  id="post-20" onclick="toggle(20);">
                
                <li class="post-context-line"><code>            route_eval(&amp;block)
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
                <li class="post-context-line"><code>      if base.superclass.respond_to?(:routes)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="699"
                  class="pre-context" id="pre-21"
                  onclick="toggle(21);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |block| instance_eval(&amp;block) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="706" class="context" id="21"
                  onclick="toggle(21);">
                <li class="context-line" id="context-21"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="707" class="post-context"
                  id="post-21" onclick="toggle(21);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do
</code></li>
                
                <li class="post-context-line"><code>            route_eval(&amp;block)
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>route!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="699"
                  class="pre-context" id="pre-22"
                  onclick="toggle(22);">
                
                <li class="pre-context-line"><code>      filter! type, base.superclass if base.superclass.respond_to?(:filters)
</code></li>
                
                <li class="pre-context-line"><code>      base.filters[type].each { |block| instance_eval(&amp;block) }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run routes defined on the class and all superclasses.
</code></li>
                
                <li class="pre-context-line"><code>    def route!(base = settings, pass_block=nil)
</code></li>
                
                <li class="pre-context-line"><code>      if routes = base.routes[@request.request_method]
</code></li>
                
              </ol>
              

              <ol start="706" class="context" id="22"
                  onclick="toggle(22);">
                <li class="context-line" id="context-22"><code>        routes.each do |pattern, keys, conditions, block|</code></li>
              </ol>

              
              <ol start="707" class="post-context"
                  id="post-22" onclick="toggle(22);">
                
                <li class="post-context-line"><code>          pass_block = process_route(pattern, keys, conditions) do
</code></li>
                
                <li class="post-context-line"><code>            route_eval(&amp;block)
</code></li>
                
                <li class="post-context-line"><code>          end
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Run routes defined in superclass.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>dispatch!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="836"
                  class="pre-context" id="pre-23"
                  onclick="toggle(23);">
                
                <li class="pre-context-line"><code>      res
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Dispatch a request with error handling.
</code></li>
                
                <li class="pre-context-line"><code>    def dispatch!
</code></li>
                
                <li class="pre-context-line"><code>      static! if settings.static? &amp;&amp; (request.get? || request.head?)
</code></li>
                
                <li class="pre-context-line"><code>      filter! :before
</code></li>
                
              </ol>
              

              <ol start="843" class="context" id="23"
                  onclick="toggle(23);">
                <li class="context-line" id="context-23"><code>      route!</code></li>
              </ol>

              
              <ol start="844" class="post-context"
                  id="post-23" onclick="toggle(23);">
                
                <li class="post-context-line"><code>    rescue NotFound =&gt; boom
</code></li>
                
                <li class="post-context-line"><code>      handle_not_found!(boom)
</code></li>
                
                <li class="post-context-line"><code>    rescue ::Exception =&gt; boom
</code></li>
                
                <li class="post-context-line"><code>      handle_exception!(boom)
</code></li>
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      filter! :after unless env[&#x27;sinatra.static_file&#x27;]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="637"
                  class="pre-context" id="pre-24"
                  onclick="toggle(24);">
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@request.route)
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="644" class="context" id="24"
                  onclick="toggle(24);">
                <li class="context-line" id="context-24"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="645" class="post-context"
                  id="post-24" onclick="toggle(24);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) }
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if body.respond_to?(:to_ary) and body.first.respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body.first.content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>instance_eval</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="801"
                  class="pre-context" id="pre-25"
                  onclick="toggle(25);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="808" class="context" id="25"
                  onclick="toggle(25);">
                <li class="context-line" id="context-25"><code>      res = catch(:halt) { instance_eval(&amp;block) }</code></li>
              </ol>

              
              <ol start="809" class="post-context"
                  id="post-25" onclick="toggle(25);">
                
                <li class="post-context-line"><code>      return if res.nil?
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      case
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_str)
</code></li>
                
                <li class="post-context-line"><code>        @response.body = [res]
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_ary)
</code></li>
                
                <li class="post-context-line"><code>        res = res.to_ary
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="801"
                  class="pre-context" id="pre-26"
                  onclick="toggle(26);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="808" class="context" id="26"
                  onclick="toggle(26);">
                <li class="context-line" id="context-26"><code>      res = catch(:halt) { instance_eval(&amp;block) }</code></li>
              </ol>

              
              <ol start="809" class="post-context"
                  id="post-26" onclick="toggle(26);">
                
                <li class="post-context-line"><code>      return if res.nil?
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      case
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_str)
</code></li>
                
                <li class="post-context-line"><code>        @response.body = [res]
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_ary)
</code></li>
                
                <li class="post-context-line"><code>        res = res.to_ary
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>catch</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="801"
                  class="pre-context" id="pre-27"
                  onclick="toggle(27);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="808" class="context" id="27"
                  onclick="toggle(27);">
                <li class="context-line" id="context-27"><code>      res = catch(:halt) { instance_eval(&amp;block) }</code></li>
              </ol>

              
              <ol start="809" class="post-context"
                  id="post-27" onclick="toggle(27);">
                
                <li class="post-context-line"><code>      return if res.nil?
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      case
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_str)
</code></li>
                
                <li class="post-context-line"><code>        @response.body = [res]
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_ary)
</code></li>
                
                <li class="post-context-line"><code>        res = res.to_ary
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="801"
                  class="pre-context" id="pre-28"
                  onclick="toggle(28);">
                
                <li class="pre-context-line"><code>    # Creates a Hash with indifferent access.
</code></li>
                
                <li class="pre-context-line"><code>    def indifferent_hash
</code></li>
                
                <li class="pre-context-line"><code>      Hash.new {|hash,key| hash[key.to_s] if Symbol === key }
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the block with &#x27;throw :halt&#x27; support and apply result to the response.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(&amp;block)
</code></li>
                
              </ol>
              

              <ol start="808" class="context" id="28"
                  onclick="toggle(28);">
                <li class="context-line" id="context-28"><code>      res = catch(:halt) { instance_eval(&amp;block) }</code></li>
              </ol>

              
              <ol start="809" class="post-context"
                  id="post-28" onclick="toggle(28);">
                
                <li class="post-context-line"><code>      return if res.nil?
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      case
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_str)
</code></li>
                
                <li class="post-context-line"><code>        @response.body = [res]
</code></li>
                
                <li class="post-context-line"><code>      when res.respond_to?(:to_ary)
</code></li>
                
                <li class="post-context-line"><code>        res = res.to_ary
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="637"
                  class="pre-context" id="pre-29"
                  onclick="toggle(29);">
                
                <li class="pre-context-line"><code>      @response = Response.new
</code></li>
                
                <li class="pre-context-line"><code>      @params   = indifferent_params(@request.params)
</code></li>
                
                <li class="pre-context-line"><code>      template_cache.clear if settings.reload_templates
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@request.route)
</code></li>
                
                <li class="pre-context-line"><code>      force_encoding(@params)
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @response[&#x27;Content-Type&#x27;] = nil
</code></li>
                
              </ol>
              

              <ol start="644" class="context" id="29"
                  onclick="toggle(29);">
                <li class="context-line" id="context-29"><code>      invoke { dispatch! }</code></li>
              </ol>

              
              <ol start="645" class="post-context"
                  id="post-29" onclick="toggle(29);">
                
                <li class="post-context-line"><code>      invoke { error_block!(response.status) }
</code></li>
                
                <li class="post-context-line"><code>      unless @response[&#x27;Content-Type&#x27;]
</code></li>
                
                <li class="post-context-line"><code>        if body.respond_to?(:to_ary) and body.first.respond_to? :content_type
</code></li>
                
                <li class="post-context-line"><code>          content_type body.first.content_type
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          content_type :html
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="622"
                  class="pre-context" id="pre-30"
                  onclick="toggle(30);">
                
                <li class="pre-context-line"><code>      @app = app
</code></li>
                
                <li class="pre-context-line"><code>      @template_cache = Tilt::Cache.new
</code></li>
                
                <li class="pre-context-line"><code>      yield self if block_given?
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Rack call interface.
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="629" class="context" id="30"
                  onclick="toggle(30);">
                <li class="context-line" id="context-30"><code>      dup.call!(env)</code></li>
              </ol>

              
              <ol start="630" class="post-context"
                  id="post-30" onclick="toggle(30);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    attr_accessor :env, :request, :response, :params
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def call!(env) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      @env      = env
</code></li>
                
                <li class="post-context-line"><code>      @request  = Request.new(env)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-1.3.0&#x2F;lib&#x2F;rack&#x2F;head.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code system">
              
              <ol start="2"
                  class="pre-context" id="pre-31"
                  onclick="toggle(31);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>class Head
</code></li>
                
                <li class="pre-context-line"><code>  def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>    @app = app
</code></li>
                
                <li class="pre-context-line"><code>  end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>  def call(env)
</code></li>
                
              </ol>
              

              <ol start="9" class="context" id="31"
                  onclick="toggle(31);">
                <li class="context-line" id="context-31"><code>    status, headers, body = @app.call(env)</code></li>
              </ol>

              
              <ol start="10" class="post-context"
                  id="post-31" onclick="toggle(31);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    if env[&quot;REQUEST_METHOD&quot;] == &quot;HEAD&quot;
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, []]
</code></li>
                
                <li class="post-context-line"><code>    else
</code></li>
                
                <li class="post-context-line"><code>      [status, headers, body]
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;showexceptions.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="14"
                  class="pre-context" id="pre-32"
                  onclick="toggle(32);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def initialize(app)
</code></li>
                
                <li class="pre-context-line"><code>      @app      = app
</code></li>
                
                <li class="pre-context-line"><code>      @template = ERB.new(TEMPLATE)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def call(env)
</code></li>
                
              </ol>
              

              <ol start="21" class="context" id="32"
                  onclick="toggle(32);">
                <li class="context-line" id="context-32"><code>      @app.call(env)</code></li>
              </ol>

              
              <ol start="22" class="post-context"
                  id="post-32" onclick="toggle(32);">
                
                <li class="post-context-line"><code>    rescue Exception =&gt; e
</code></li>
                
                <li class="post-context-line"><code>      errors, env[&quot;rack.errors&quot;] = env[&quot;rack.errors&quot;], @@eats_errors
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      if respond_to?(:prefers_plain_text?) and prefers_plain_text?(env)
</code></li>
                
                <li class="post-context-line"><code>        content_type = &quot;text&#x2F;plain&quot;
</code></li>
                
                <li class="post-context-line"><code>        body = [dump_exception(e)]
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>block in call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1265"
                  class="pre-context" id="pre-33"
                  onclick="toggle(33);">
                
                <li class="pre-context-line"><code>        setup_sessions builder
</code></li>
                
                <li class="pre-context-line"><code>        middleware.each { |c,a,b| builder.use(c, *a, &amp;b) }
</code></li>
                
                <li class="pre-context-line"><code>        builder.run new!(*args, &amp;bk)
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1272" class="context" id="33"
                  onclick="toggle(33);">
                <li class="context-line" id="context-33"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1273" class="post-context"
                  id="post-33" onclick="toggle(33);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>      def setup_sessions(builder)
</code></li>
                
                <li class="post-context-line"><code>        return unless sessions?
</code></li>
                
                <li class="post-context-line"><code>        builder.use Rack::Session::Cookie, :secret =&gt; session_secret
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>synchronize</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1296"
                  class="pre-context" id="pre-34"
                  onclick="toggle(34);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      @@mutex = Mutex.new
</code></li>
                
                <li class="pre-context-line"><code>      def synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        if lock?
</code></li>
                
                <li class="pre-context-line"><code>          @@mutex.synchronize(&amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="1303" class="context" id="34"
                  onclick="toggle(34);">
                <li class="context-line" id="context-34"><code>          yield</code></li>
              </ol>

              
              <ol start="1304" class="post-context"
                  id="post-34" onclick="toggle(34);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      def metadef(message, &amp;block)
</code></li>
                
                <li class="post-context-line"><code>        (class &lt;&lt; self; self; end).
</code></li>
                
                <li class="post-context-line"><code>          send :define_method, message, &amp;block
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-1.2.6&#x2F;lib&#x2F;sinatra&#x2F;base.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="1265"
                  class="pre-context" id="pre-35"
                  onclick="toggle(35);">
                
                <li class="pre-context-line"><code>        setup_sessions builder
</code></li>
                
                <li class="pre-context-line"><code>        middleware.each { |c,a,b| builder.use(c, *a, &amp;b) }
</code></li>
                
                <li class="pre-context-line"><code>        builder.run new!(*args, &amp;bk)
</code></li>
                
                <li class="pre-context-line"><code>        builder
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def call(env)
</code></li>
                
              </ol>
              

              <ol start="1272" class="context" id="35"
                  onclick="toggle(35);">
                <li class="context-line" id="context-35"><code>        synchronize { prototype.call(env) }</code></li>
              </ol>

              
              <ol start="1273" class="post-context"
                  id="post-35" onclick="toggle(35);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    private
</code></li>
                
                <li class="post-context-line"><code>      def setup_sessions(builder)
</code></li>
                
                <li class="post-context-line"><code>        return unless sessions?
</code></li>
                
                <li class="post-context-line"><code>        builder.use Rack::Session::Cookie, :secret =&gt; session_secret
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.1&#x2F;lib&#x2F;rack&#x2F;mock_session.rb</code> in
                <code><strong>request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="23"
                  class="pre-context" id="pre-36"
                  onclick="toggle(36);">
                
                <li class="pre-context-line"><code>    def set_cookie(cookie, uri = nil)
</code></li>
                
                <li class="pre-context-line"><code>      cookie_jar.merge(cookie, uri)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>      env[&quot;HTTP_COOKIE&quot;] ||= cookie_jar.for(uri)
</code></li>
                
                <li class="pre-context-line"><code>      @last_request = Rack::Request.new(env)
</code></li>
                
              </ol>
              

              <ol start="30" class="context" id="36"
                  onclick="toggle(36);">
                <li class="context-line" id="context-36"><code>      status, headers, body = @app.call(@last_request.env)</code></li>
              </ol>

              
              <ol start="31" class="post-context"
                  id="post-36" onclick="toggle(36);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @last_response = MockResponse.new(status, headers, body, env[&quot;rack.errors&quot;].flush)
</code></li>
                
                <li class="post-context-line"><code>      body.close if body.respond_to?(:close)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      cookie_jar.merge(last_response.headers[&quot;Set-Cookie&quot;], uri)
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      @after_request.each { |hook| hook.call }
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.1&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>process_request</strong></code>
            </li>

            <li class="code system">
              
              <ol start="212"
                  class="pre-context" id="pre-37"
                  onclick="toggle(37);">
                
                <li class="pre-context-line"><code>        Rack::MockRequest.env_for(uri.to_s, env)
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def process_request(uri, env)
</code></li>
                
                <li class="pre-context-line"><code>        uri = URI.parse(uri)
</code></li>
                
                <li class="pre-context-line"><code>        uri.host ||= @default_host
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="219" class="context" id="37"
                  onclick="toggle(37);">
                <li class="context-line" id="context-37"><code>        @rack_mock_session.request(uri, env)</code></li>
              </ol>

              
              <ol start="220" class="post-context"
                  id="post-37" onclick="toggle(37);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        if retry_with_digest_auth?(env)
</code></li>
                
                <li class="post-context-line"><code>          auth_env = env.merge({
</code></li>
                
                <li class="post-context-line"><code>            &quot;HTTP_AUTHORIZATION&quot;          =&gt; digest_auth_header,
</code></li>
                
                <li class="post-context-line"><code>            &quot;rack-test.digest_auth_retry&quot; =&gt; true
</code></li>
                
                <li class="post-context-line"><code>          })
</code></li>
                
                <li class="post-context-line"><code>          auth_env.delete(&#x27;rack.request&#x27;)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rack-test-0.6.1&#x2F;lib&#x2F;rack&#x2F;test.rb</code> in
                <code><strong>get</strong></code>
            </li>

            <li class="code system">
              
              <ol start="50"
                  class="pre-context" id="pre-38"
                  onclick="toggle(38);">
                
                <li class="pre-context-line"><code>      # the app&#x27;s response in #last_response. Yield #last_response to a block
</code></li>
                
                <li class="pre-context-line"><code>      # if given.
</code></li>
                
                <li class="pre-context-line"><code>      #
</code></li>
                
                <li class="pre-context-line"><code>      # Example:
</code></li>
                
                <li class="pre-context-line"><code>      #   get &quot;&#x2F;&quot;
</code></li>
                
                <li class="pre-context-line"><code>      def get(uri, params = {}, env = {}, &amp;block)
</code></li>
                
                <li class="pre-context-line"><code>        env = env_for(uri, env.merge(:method =&gt; &quot;GET&quot;, :params =&gt; params))
</code></li>
                
              </ol>
              

              <ol start="57" class="context" id="38"
                  onclick="toggle(38);">
                <li class="context-line" id="context-38"><code>        process_request(uri, env, &amp;block)</code></li>
              </ol>

              
              <ol start="58" class="post-context"
                  id="post-38" onclick="toggle(38);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>      # Issue a POST request for the given URI. See #get
</code></li>
                
                <li class="post-context-line"><code>      #
</code></li>
                
                <li class="post-context-line"><code>      # Example:
</code></li>
                
                <li class="post-context-line"><code>      #   post &quot;&#x2F;signup&quot;, &quot;name&quot; =&gt; &quot;Bryan&quot;
</code></li>
                
                <li class="post-context-line"><code>      def post(uri, params = {}, env = {}, &amp;block)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>block in build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="139"
                  class="pre-context" id="pre-39"
                  onclick="toggle(39);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      attr_reader :served
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        session = Rack::Test::Session.new app
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>        packages.each { |_, pack|
</code></li>
                
              </ol>
              

              <ol start="146" class="context" id="39"
                  onclick="toggle(39);">
                <li class="context-line" id="context-39"><code>          out = session.get(pack.path).body</code></li>
              </ol>

              
              <ol start="147" class="post-context"
                  id="post-39" onclick="toggle(39);">
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
                <li class="post-context-line"><code>          out = session.get(path).body
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="138"
                  class="pre-context" id="pre-40"
                  onclick="toggle(40);">
                
                <li class="pre-context-line"><code>      # Stuff
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      attr_reader :served
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        session = Rack::Test::Session.new app
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="145" class="context" id="40"
                  onclick="toggle(40);">
                <li class="context-line" id="context-40"><code>        packages.each { |_, pack|</code></li>
              </ol>

              
              <ol start="146" class="post-context"
                  id="post-40" onclick="toggle(40);">
                
                <li class="post-context-line"><code>          out = session.get(pack.path).body
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;options.rb</code> in
                <code><strong>build!</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="138"
                  class="pre-context" id="pre-41"
                  onclick="toggle(41);">
                
                <li class="pre-context-line"><code>      # Stuff
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      attr_reader :served
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>      def build!(&amp;blk)
</code></li>
                
                <li class="pre-context-line"><code>        session = Rack::Test::Session.new app
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="145" class="context" id="41"
                  onclick="toggle(41);">
                <li class="context-line" id="context-41"><code>        packages.each { |_, pack|</code></li>
              </ol>

              
              <ol start="146" class="post-context"
                  id="post-41" onclick="toggle(41);">
                
                <li class="post-context-line"><code>          out = session.get(pack.path).body
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>          write pack.path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>          write pack.production_path, out, &amp;blk
</code></li>
                
                <li class="post-context-line"><code>        }
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>        files.each { |path, local|
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info framework">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;sinatra-assetpack-0.0.8&#x2F;lib&#x2F;sinatra&#x2F;assetpack&#x2F;rake.rb</code> in
                <code><strong>block (2 levels) in &lt;top (required)&gt;</strong></code>
            </li>

            <li class="code framework">
              
              <ol start="12"
                  class="pre-context" id="pre-42"
                  onclick="toggle(42);">
                
                <li class="pre-context-line"><code>  require File.expand_path(APP_FILE, Dir.pwd)
</code></li>
                
                <li class="pre-context-line"><code>  Object.const_get(APP_CLASS.to_sym)
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>namespace :assetpack do
</code></li>
                
                <li class="pre-context-line"><code>  desc &quot;Build assets&quot;
</code></li>
                
                <li class="pre-context-line"><code>  task :build do
</code></li>
                
              </ol>
              

              <ol start="19" class="context" id="42"
                  onclick="toggle(42);">
                <li class="context-line" id="context-42"><code>    app.assets.build! { |file|</code></li>
              </ol>

              
              <ol start="20" class="post-context"
                  id="post-42" onclick="toggle(42);">
                
                <li class="post-context-line"><code>      puts &quot;+ #{file.gsub(Dir.pwd, &#x27;&#x27;)}&quot;
</code></li>
                
                <li class="post-context-line"><code>    }
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>call</strong></code>
            </li>

            <li class="code app">
              
              <ol start="198"
                  class="pre-context" id="pre-43"
                  onclick="toggle(43);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="205" class="context" id="43"
                  onclick="toggle(43);">
                <li class="context-line" id="context-43"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="206" class="post-context"
                  id="post-43" onclick="toggle(43);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in execute</strong></code>
            </li>

            <li class="code app">
              
              <ol start="198"
                  class="pre-context" id="pre-44"
                  onclick="toggle(44);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
                <li class="pre-context-line"><code>      @actions.each do |act|
</code></li>
                
                <li class="pre-context-line"><code>        case act.arity
</code></li>
                
                <li class="pre-context-line"><code>        when 1
</code></li>
                
                <li class="pre-context-line"><code>          act.call(self)
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="205" class="context" id="44"
                  onclick="toggle(44);">
                <li class="context-line" id="context-44"><code>          act.call(self, args)</code></li>
              </ol>

              
              <ol start="206" class="post-context"
                  id="post-44" onclick="toggle(44);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Is this task needed?
</code></li>
                
                <li class="post-context-line"><code>    def needed?
</code></li>
                
                <li class="post-context-line"><code>      true
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code app">
              
              <ol start="193"
                  class="pre-context" id="pre-45"
                  onclick="toggle(45);">
                
                <li class="pre-context-line"><code>        $stderr.puts &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>        $stderr.puts &quot;** Execute #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="200" class="context" id="45"
                  onclick="toggle(45);">
                <li class="context-line" id="context-45"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="201" class="post-context"
                  id="post-45" onclick="toggle(45);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>execute</strong></code>
            </li>

            <li class="code app">
              
              <ol start="193"
                  class="pre-context" id="pre-46"
                  onclick="toggle(46);">
                
                <li class="pre-context-line"><code>        $stderr.puts &quot;** Execute (dry run) #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        return
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>        $stderr.puts &quot;** Execute #{name}&quot;
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      application.enhance_with_matching_rule(name) if @actions.empty?
</code></li>
                
              </ol>
              

              <ol start="200" class="context" id="46"
                  onclick="toggle(46);">
                <li class="context-line" id="context-46"><code>      @actions.each do |act|</code></li>
              </ol>

              
              <ol start="201" class="post-context"
                  id="post-46" onclick="toggle(46);">
                
                <li class="post-context-line"><code>        case act.arity
</code></li>
                
                <li class="post-context-line"><code>        when 1
</code></li>
                
                <li class="post-context-line"><code>          act.call(self)
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          act.call(self, args)
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>block in invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="151"
                  class="pre-context" id="pre-47"
                  onclick="toggle(47);">
                
                <li class="pre-context-line"><code>      @lock.synchronize do
</code></li>
                
                <li class="pre-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="pre-context-line"><code>          $stderr.puts &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="pre-context-line"><code>        end
</code></li>
                
                <li class="pre-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="pre-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="pre-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
              </ol>
              

              <ol start="158" class="context" id="47"
                  onclick="toggle(47);">
                <li class="context-line" id="context-47"><code>        execute(task_args) if needed?</code></li>
              </ol>

              
              <ol start="159" class="post-context"
                  id="post-47" onclick="toggle(47);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    rescue Exception =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>      add_chain_to(ex, new_chain)
</code></li>
                
                <li class="post-context-line"><code>      raise ex
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>    protected :invoke_with_call_chain
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;monitor.rb</code> in
                <code><strong>mon_synchronize</strong></code>
            </li>

            <li class="code app">
              
              <ol start="204"
                  class="pre-context" id="pre-48"
                  onclick="toggle(48);">
                
                <li class="pre-context-line"><code>  # Enters exclusive section and executes the block.  Leaves the exclusive
</code></li>
                
                <li class="pre-context-line"><code>  # section automatically when the block exits.  See example under
</code></li>
                
                <li class="pre-context-line"><code>  # +MonitorMixin+.
</code></li>
                
                <li class="pre-context-line"><code>  #
</code></li>
                
                <li class="pre-context-line"><code>  def mon_synchronize
</code></li>
                
                <li class="pre-context-line"><code>    mon_enter
</code></li>
                
                <li class="pre-context-line"><code>    begin
</code></li>
                
              </ol>
              

              <ol start="211" class="context" id="48"
                  onclick="toggle(48);">
                <li class="context-line" id="context-48"><code>      yield</code></li>
              </ol>

              
              <ol start="212" class="post-context"
                  id="post-48" onclick="toggle(48);">
                
                <li class="post-context-line"><code>    ensure
</code></li>
                
                <li class="post-context-line"><code>      mon_exit
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>  end
</code></li>
                
                <li class="post-context-line"><code>  alias synchronize mon_synchronize
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>  #
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke_with_call_chain</strong></code>
            </li>

            <li class="code app">
              
              <ol start="144"
                  class="pre-context" id="pre-49"
                  onclick="toggle(49);">
                
                <li class="pre-context-line"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="pre-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="pre-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
              </ol>
              

              <ol start="151" class="context" id="49"
                  onclick="toggle(49);">
                <li class="context-line" id="context-49"><code>      @lock.synchronize do</code></li>
              </ol>

              
              <ol start="152" class="post-context"
                  id="post-49" onclick="toggle(49);">
                
                <li class="post-context-line"><code>        if application.options.trace
</code></li>
                
                <li class="post-context-line"><code>          $stderr.puts &quot;** Invoke #{name} #{format_trace_flags}&quot;
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>        return if @already_invoked
</code></li>
                
                <li class="post-context-line"><code>        @already_invoked = true
</code></li>
                
                <li class="post-context-line"><code>        invoke_prerequisites(task_args, new_chain)
</code></li>
                
                <li class="post-context-line"><code>        execute(task_args) if needed?
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;task.rb</code> in
                <code><strong>invoke</strong></code>
            </li>

            <li class="code app">
              
              <ol start="137"
                  class="pre-context" id="pre-50"
                  onclick="toggle(50);">
                
                <li class="pre-context-line"><code>      actions.clear
</code></li>
                
                <li class="pre-context-line"><code>      self
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Invoke the task if it is needed.  Prerequisites are invoked first.
</code></li>
                
                <li class="pre-context-line"><code>    def invoke(*args)
</code></li>
                
                <li class="pre-context-line"><code>      task_args = TaskArguments.new(arg_names, args)
</code></li>
                
              </ol>
              

              <ol start="144" class="context" id="50"
                  onclick="toggle(50);">
                <li class="context-line" id="context-50"><code>      invoke_with_call_chain(task_args, InvocationChain::EMPTY)</code></li>
              </ol>

              
              <ol start="145" class="post-context"
                  id="post-50" onclick="toggle(50);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Same as invoke, but explicitly pass a call chain to detect
</code></li>
                
                <li class="post-context-line"><code>    # circular dependencies.
</code></li>
                
                <li class="post-context-line"><code>    def invoke_with_call_chain(task_args, invocation_chain) # :nodoc:
</code></li>
                
                <li class="post-context-line"><code>      new_chain = InvocationChain.append(self, invocation_chain)
</code></li>
                
                <li class="post-context-line"><code>      @lock.synchronize do
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>invoke_task</strong></code>
            </li>

            <li class="code app">
              
              <ol start="109"
                  class="pre-context" id="pre-51"
                  onclick="toggle(51);">
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # private ----------------------------------------------------------------
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    def invoke_task(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      name, args = parse_task_string(task_string)
</code></li>
                
                <li class="pre-context-line"><code>      t = self[name]
</code></li>
                
              </ol>
              

              <ol start="116" class="context" id="51"
                  onclick="toggle(51);">
                <li class="context-line" id="context-51"><code>      t.invoke(*args)</code></li>
              </ol>

              
              <ol start="117" class="post-context"
                  id="post-51" onclick="toggle(51);">
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    def parse_task_string(string)
</code></li>
                
                <li class="post-context-line"><code>      if string =~ &#x2F;^([^\[]+)(\[(.*)\])$&#x2F;
</code></li>
                
                <li class="post-context-line"><code>        name = $1
</code></li>
                
                <li class="post-context-line"><code>        args = $3.split(&#x2F;\s*,\s*&#x2F;)
</code></li>
                
                <li class="post-context-line"><code>      else
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block (2 levels) in top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="87"
                  class="pre-context" id="pre-52"
                  onclick="toggle(52);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="94" class="context" id="52"
                  onclick="toggle(52);">
                <li class="context-line" id="context-52"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="95" class="post-context"
                  id="post-52" onclick="toggle(52);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Add a loader to handle imported files ending in the extension
</code></li>
                
                <li class="post-context-line"><code>    # +ext+.
</code></li>
                
                <li class="post-context-line"><code>    def add_loader(ext, loader)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>each</strong></code>
            </li>

            <li class="code app">
              
              <ol start="87"
                  class="pre-context" id="pre-53"
                  onclick="toggle(53);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="94" class="context" id="53"
                  onclick="toggle(53);">
                <li class="context-line" id="context-53"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="95" class="post-context"
                  id="post-53" onclick="toggle(53);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Add a loader to handle imported files ending in the extension
</code></li>
                
                <li class="post-context-line"><code>    # +ext+.
</code></li>
                
                <li class="post-context-line"><code>    def add_loader(ext, loader)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="87"
                  class="pre-context" id="pre-54"
                  onclick="toggle(54);">
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="pre-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="pre-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="pre-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="pre-context-line"><code>        else
</code></li>
                
              </ol>
              

              <ol start="94" class="context" id="54"
                  onclick="toggle(54);">
                <li class="context-line" id="context-54"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }</code></li>
              </ol>

              
              <ol start="95" class="post-context"
                  id="post-54" onclick="toggle(54);">
                
                <li class="post-context-line"><code>        end
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Add a loader to handle imported files ending in the extension
</code></li>
                
                <li class="post-context-line"><code>    # +ext+.
</code></li>
                
                <li class="post-context-line"><code>    def add_loader(ext, loader)
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>standard_exception_handling</strong></code>
            </li>

            <li class="code app">
              
              <ol start="126"
                  class="pre-context" id="pre-55"
                  onclick="toggle(55);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      [name, args]
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Provide standard exception handling for the given block.
</code></li>
                
                <li class="pre-context-line"><code>    def standard_exception_handling
</code></li>
                
                <li class="pre-context-line"><code>      begin
</code></li>
                
              </ol>
              

              <ol start="133" class="context" id="55"
                  onclick="toggle(55);">
                <li class="context-line" id="context-55"><code>        yield</code></li>
              </ol>

              
              <ol start="134" class="post-context"
                  id="post-55" onclick="toggle(55);">
                
                <li class="post-context-line"><code>      rescue SystemExit =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        # Exit silently with current status
</code></li>
                
                <li class="post-context-line"><code>        raise
</code></li>
                
                <li class="post-context-line"><code>      rescue OptionParser::InvalidOption =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        $stderr.puts ex.message
</code></li>
                
                <li class="post-context-line"><code>        exit(false)
</code></li>
                
                <li class="post-context-line"><code>      rescue Exception =&gt; ex
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>top_level</strong></code>
            </li>

            <li class="code app">
              
              <ol start="81"
                  class="pre-context" id="pre-56"
                  onclick="toggle(56);">
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        raw_load_rakefile
</code></li>
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Run the top level tasks of a Rake application.
</code></li>
                
                <li class="pre-context-line"><code>    def top_level
</code></li>
                
              </ol>
              

              <ol start="88" class="context" id="56"
                  onclick="toggle(56);">
                <li class="context-line" id="context-56"><code>      standard_exception_handling do</code></li>
              </ol>

              
              <ol start="89" class="post-context"
                  id="post-56" onclick="toggle(56);">
                
                <li class="post-context-line"><code>        if options.show_tasks
</code></li>
                
                <li class="post-context-line"><code>          display_tasks_and_comments
</code></li>
                
                <li class="post-context-line"><code>        elsif options.show_prereqs
</code></li>
                
                <li class="post-context-line"><code>          display_prerequisites
</code></li>
                
                <li class="post-context-line"><code>        else
</code></li>
                
                <li class="post-context-line"><code>          top_level_tasks.each { |task_name| invoke_task(task_name) }
</code></li>
                
                <li class="post-context-line"><code>        end
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>block in run</strong></code>
            </li>

            <li class="code app">
              
              <ol start="59"
                  class="pre-context" id="pre-57"
                  onclick="toggle(57);">
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
                <li class="pre-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="pre-context-line"><code>        init
</code></li>
                
                <li class="pre-context-line"><code>        load_rakefile
</code></li>
                
              </ol>
              

              <ol start="66" class="context" id="57"
                  onclick="toggle(57);">
                <li class="context-line" id="context-57"><code>        top_level</code></li>
              </ol>

              
              <ol start="67" class="post-context"
                  id="post-57" onclick="toggle(57);">
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
                <li class="post-context-line"><code>    def init(app_name=&#x27;rake&#x27;)
</code></li>
                
                <li class="post-context-line"><code>      standard_exception_handling do
</code></li>
                
                <li class="post-context-line"><code>        @name = app_name
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>standard_exception_handling</strong></code>
            </li>

            <li class="code app">
              
              <ol start="126"
                  class="pre-context" id="pre-58"
                  onclick="toggle(58);">
                
                <li class="pre-context-line"><code>      end
</code></li>
                
                <li class="pre-context-line"><code>      [name, args]
</code></li>
                
                <li class="pre-context-line"><code>    end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>    # Provide standard exception handling for the given block.
</code></li>
                
                <li class="pre-context-line"><code>    def standard_exception_handling
</code></li>
                
                <li class="pre-context-line"><code>      begin
</code></li>
                
              </ol>
              

              <ol start="133" class="context" id="58"
                  onclick="toggle(58);">
                <li class="context-line" id="context-58"><code>        yield</code></li>
              </ol>

              
              <ol start="134" class="post-context"
                  id="post-58" onclick="toggle(58);">
                
                <li class="post-context-line"><code>      rescue SystemExit =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        # Exit silently with current status
</code></li>
                
                <li class="post-context-line"><code>        raise
</code></li>
                
                <li class="post-context-line"><code>      rescue OptionParser::InvalidOption =&gt; ex
</code></li>
                
                <li class="post-context-line"><code>        $stderr.puts ex.message
</code></li>
                
                <li class="post-context-line"><code>        exit(false)
</code></li>
                
                <li class="post-context-line"><code>      rescue Exception =&gt; ex
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info app">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;1.9.1&#x2F;rake&#x2F;application.rb</code> in
                <code><strong>run</strong></code>
            </li>

            <li class="code app">
              
              <ol start="56"
                  class="pre-context" id="pre-59"
                  onclick="toggle(59);">
                
                <li class="pre-context-line"><code>    # * Define the tasks (+load_rakefile+).
</code></li>
                
                <li class="pre-context-line"><code>    # * Run the top level tasks (+run_tasks+).
</code></li>
                
                <li class="pre-context-line"><code>    #
</code></li>
                
                <li class="pre-context-line"><code>    # If you wish to build a custom rake command, you should call
</code></li>
                
                <li class="pre-context-line"><code>    # +init+ on your application.  Then define any tasks.  Finally,
</code></li>
                
                <li class="pre-context-line"><code>    # call +top_level+ to run your top level tasks.
</code></li>
                
                <li class="pre-context-line"><code>    def run
</code></li>
                
              </ol>
              

              <ol start="63" class="context" id="59"
                  onclick="toggle(59);">
                <li class="context-line" id="context-59"><code>      standard_exception_handling do</code></li>
              </ol>

              
              <ol start="64" class="post-context"
                  id="post-59" onclick="toggle(59);">
                
                <li class="post-context-line"><code>        init
</code></li>
                
                <li class="post-context-line"><code>        load_rakefile
</code></li>
                
                <li class="post-context-line"><code>        top_level
</code></li>
                
                <li class="post-context-line"><code>      end
</code></li>
                
                <li class="post-context-line"><code>    end
</code></li>
                
                <li class="post-context-line"><code>
</code></li>
                
                <li class="post-context-line"><code>    # Initialize the command line parameters and app name.
</code></li>
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;stow&#x2F;ruby-1.9.3-p0&#x2F;lib&#x2F;ruby&#x2F;gems&#x2F;1.9.1&#x2F;gems&#x2F;rake-0.9.2.2&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;top (required)&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="25"
                  class="pre-context" id="pre-60"
                  onclick="toggle(60);">
                
                <li class="pre-context-line"><code>begin
</code></li>
                
                <li class="pre-context-line"><code>  require &#x27;rubygems&#x27;
</code></li>
                
                <li class="pre-context-line"><code>rescue LoadError
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>require &#x27;rake&#x27;
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
              </ol>
              

              <ol start="32" class="context" id="60"
                  onclick="toggle(60);">
                <li class="context-line" id="context-60"><code>Rake.application.run</code></li>
              </ol>

              
              <ol start="33" class="post-context"
                  id="post-60" onclick="toggle(60);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;bin&#x2F;rake</code> in
                <code><strong>load</strong></code>
            </li>

            <li class="code system">
              
              <ol start="12"
                  class="pre-context" id="pre-61"
                  onclick="toggle(61);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>if ARGV.first =~ &#x2F;^_(.*)_$&#x2F; and Gem::Version.correct? $1 then
</code></li>
                
                <li class="pre-context-line"><code>  version = $1
</code></li>
                
                <li class="pre-context-line"><code>  ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="19" class="context" id="61"
                  onclick="toggle(61);">
                <li class="context-line" id="context-61"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="20" class="post-context"
                  id="post-61" onclick="toggle(61);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      
          

            <li class="frame-info system">
              <code>&#x2F;usr&#x2F;local&#x2F;bin&#x2F;rake</code> in
                <code><strong>&lt;main&gt;</strong></code>
            </li>

            <li class="code system">
              
              <ol start="12"
                  class="pre-context" id="pre-62"
                  onclick="toggle(62);">
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>if ARGV.first =~ &#x2F;^_(.*)_$&#x2F; and Gem::Version.correct? $1 then
</code></li>
                
                <li class="pre-context-line"><code>  version = $1
</code></li>
                
                <li class="pre-context-line"><code>  ARGV.shift
</code></li>
                
                <li class="pre-context-line"><code>end
</code></li>
                
                <li class="pre-context-line"><code>
</code></li>
                
                <li class="pre-context-line"><code>gem &#x27;rake&#x27;, version
</code></li>
                
              </ol>
              

              <ol start="19" class="context" id="62"
                  onclick="toggle(62);">
                <li class="context-line" id="context-62"><code>load Gem.bin_path(&#x27;rake&#x27;, &#x27;rake&#x27;, version)</code></li>
              </ol>

              
              <ol start="20" class="post-context"
                  id="post-62" onclick="toggle(62);">
                
              </ol>
              
              <div class="clear"></div>
            </li>

          

        
      

      </ul>
    </div> <!-- /BACKTRACE -->

    <div id="get">
      <h3 id="get-info">GET</h3>
      
        <p class="no-data">No GET data.</p>
      
      <div class="clear"></div>
    </div> <!-- /GET -->

    <div id="post">
      <h3 id="post-info">POST</h3>
      
        <p class="no-data">No POST data.</p>
      
      <div class="clear"></div>
    </div> <!-- /POST -->

    <div id="cookies">
      <h3 id="cookie-info">COOKIES</h3>
      
        <p class="no-data">No cookie data.</p>
      
      <div class="clear"></div>
    </div> <!-- /COOKIES -->

    <div id="rack">
      <h3 id="env-info">Rack ENV</h3>
      <table class="req">
        <tr>
          <th>Variable</th>
          <th>Value</th>
        </tr>
         
         <tr>
           <td>CONTENT_LENGTH</td>
           <td class="code"><div>0</div></td>
         </tr>
         
         <tr>
           <td>HTTPS</td>
           <td class="code"><div>off</div></td>
         </tr>
         
         <tr>
           <td>HTTP_COOKIE</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>HTTP_HOST</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>PATH_INFO</td>
           <td class="code"><div>&#x2F;assets&#x2F;application.js</div></td>
         </tr>
         
         <tr>
           <td>QUERY_STRING</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>REMOTE_ADDR</td>
           <td class="code"><div>127.0.0.1</div></td>
         </tr>
         
         <tr>
           <td>REQUEST_METHOD</td>
           <td class="code"><div>GET</div></td>
         </tr>
         
         <tr>
           <td>SCRIPT_NAME</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>SERVER_NAME</td>
           <td class="code"><div>example.org</div></td>
         </tr>
         
         <tr>
           <td>SERVER_PORT</td>
           <td class="code"><div>80</div></td>
         </tr>
         
         <tr>
           <td>rack.errors</td>
           <td class="code"><div>#&lt;Object:0x00000001ebcdb8&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.input</td>
           <td class="code"><div>#&lt;StringIO:0x0000000257ce50&gt;</div></td>
         </tr>
         
         <tr>
           <td>rack.multiprocess</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.multithread</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.cookie_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_hash</td>
           <td class="code"><div>{}</div></td>
         </tr>
         
         <tr>
           <td>rack.request.query_string</td>
           <td class="code"><div></div></td>
         </tr>
         
         <tr>
           <td>rack.run_once</td>
           <td class="code"><div>false</div></td>
         </tr>
         
         <tr>
           <td>rack.test</td>
           <td class="code"><div>true</div></td>
         </tr>
         
         <tr>
           <td>rack.url_scheme</td>
           <td class="code"><div>http</div></td>
         </tr>
         
         <tr>
           <td>rack.version</td>
           <td class="code"><div>[1, 1]</div></td>
         </tr>
         
         <tr>
           <td>sinatra.error</td>
           <td class="code"><div>#&lt;RuntimeError: JSMin parse error: unterminated regular expression literal: 
&gt;</div></td>
         </tr>
         
      </table>
      <div class="clear"></div>
    </div> <!-- /RACK ENV -->

    <p id="explanation">You're seeing this error because you have
enabled the <code>show_exceptions</code> setting.</p>
  </div> <!-- /WRAP -->
  </body>
</html>
