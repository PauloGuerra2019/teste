var nomeCanal ='thisforcin2';
$(document).ready(function(){
   $.get("https://www.googleapis.com/youtube/v3/channels",{
       part:'contentDetails',
       forUsername:nomeCanal,
       key:'AIzaSyAEp7TcVrsmkT1fEyVH9q1OUGGFqyfIP4s'
            },
         function(data){
            upload_id = data.items[0].contentDetails.relatedPlaylists.uploads;
            pegarVideos(upload_id);        
   
            }
        
        ) 
    
    function pegarVideos(id){
       $.get("https://www.googleapis.com/youtube/v3/playlistItems",{
           part:'snippet',
           maxResults: 12,
           playlistId: id,
           key:'AIzaSyAEp7TcVrsmkT1fEyVH9q1OUGGFqyfIP4s'
       },
             function(data){
               var imagem;
               var arquivo;   
           $.each(data.items, function(i, item){
              imagem = item.snippet.thumbnails.medium.url;
              titulo = item.snippet.title; 
              descricao = item.snippet.publishedAt;
              videoId =item.snippet.resourceId.videoId;   
              arquivo = '<li class="principal"><a class="nyroModal" href="http://www.youtube.com/watch?v='+videoId+'"><div class="foto"><img src ="' + imagem + '"/><div class="legenda"><h5>'+ titulo +'</h5><p>'+ descricao +'</p></div></div></a></li>';
               $('div#janela ul').append(arquivo);
           });
        }
      )
    }
});
