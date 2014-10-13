my-dotjs-trick
==============

dotjs script repo

i would use this one : https://github.com/p3lim/dotjs-universal

the original repo for mac os x : https://github.com/defunkt/dotjs

make a symbolic link to scripts

ln -s /home/rmichela/.js/my-dotjs-trick/* ~/.config/google-chrome/Default/Extensions/mnnjfadhifkmdoalniglnmmpjggnfbam/1.6.1_0/scripts/

seems not working with symbolic link

so rsync -a /home/rmichela/.js/my-dotjs-trick/* ~/.config/google-chrome/Default/Extensions/mnnjfadhifkmdoalniglnmmpjggnfbam/1.6.1_0/scripts/
