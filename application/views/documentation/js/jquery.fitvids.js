C�n�	��?�Y��b�uI4p�C�n�	assets/scss/vendor/bootstrap/utilities/_sizing.scss 100644 100644 0 �vH�"��ʲ�N����D^�vH�"��ʲ�N����D^assets/scss/vendor/bootstrap/utilities/_spacing.scss 100644 100644 0 56y
H�:&"b~BgBZ.�a56y
H�:&"b~BgBZ.�aassets/scss/vendor/bootstrap/utilities/_stretched-link.scss 100644 100644 0 �Pf�U�-V����"��w]8�Pf�U�-V����"��w]8assets/scss/vendor/bootstrap/utilities/_text.scss 100644 100644 0 :�����I<p�sk�
-,2�:�����I<p�sk�
-,2�assets/scss/vendor/bootstrap/utilities/_visibility.scss 100644 100644 0 wVÿ��m/��,�n���=wVÿ��m/��,�n���=assets/scss/vendor/bootstrap/vendor/_rfs.scss 100644 100644 0 I~���a�H�p�m��I~���a�H�p�m��assets/style.css 100644 100644 0 6��u���k��O�!��u6��u���k��O�!��ucomposer.json 100644 100644 0 0c"C��0���LP?�l�0c"C��0���LP?�l�contributing.md 100644 100644 0 p?��J)_^������z�L8p?��J)_^������z�L8index.php 100644 100644 0 �PG*�/Ӟ����
i�PG*�/Ӟ����
ilicense.txt 100644 100644 0 'C��SA��+|����
Cf'C��SA��+|����
Cfreadme.rst 100644 100644 0 �R ���S�,�	8���R ���S�,�	8��system/.htaccess 100644 100644 0 ��]-�Bi���ca^���ʗ�]-�Bi���ca^����system/core/Benchmark.php 100644 100644 0 B �H���67���c*�cn�B �H���67���c*�cn�system/core/CodeIgniter.php 100644 100644 0 ����G�k�z���N�EJC�����G�k�z���N�EJC�system/core/Common.php 100644 100644 0 bKZ�wf��!�4{��`�ibKZ�wf��!�4{��`�isystem/core/Config.php 100644 100644 0 �l0�f�=�UL��#�m��l0�f�=�UL��#�m�system/core/Controller.php 100644 100644 0 �[�r�s�{�uiE<	��Ad��[�r�s�{�uiE<	��Ad�system/core/Exceptions.php 100644 100644 0 ���K��/���
�����˜���K��/���
�����˜system/core/Hooks.php 100644 100644 0 b6�I������1՗H�@b6�I������1՗H�@system/core/Input.php 100644 100644 0 0�rY5X��Vz�Tl�)0�rY5X��Vz�Tl�)system/core/Lang.php 100644 100644 0 ,�T��4�˫��<�+�2�,�T��4�˫��<�+�2�system/core/Loader.php 100644 100644 0 ��I���@��<q(�lȲm���I���@��<q(�lȲm�system/core/Log.php 100644 100644 0 �w&� �|�q���Il;���w&� �|�q���Il;��system/core/Model.php 100644 100644 0 
���                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         s.attr('height'), 10))) ) ? parseInt($this.attr('height'), 10) : $this.height(),
            width = !isNaN(parseInt($this.attr('width'), 10)) ? parseInt($this.attr('width'), 10) : $this.width(),
            aspectRatio = height / width;
        if(!$this.attr('id')){
          var videoID = 'fitvid' + count;
          $this.attr('id', videoID);
        }
        $this.wrap('<div class="fluid-width-video-wrapper"></div>').parent('.fluid-width-video-wrapper').css('padding-top', (aspectRatio * 100)+'%');
        $this.removeAttr('height').removeAttr('width');
      });
    });
  };
// Works with either jQuery or Zepto
})( window.jQuery || window.Zepto );
